var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var data_personal_info = {
  title: 'Karthikeyan Natesan | Personal Info',
  profile_section_header: 'Personal Info',
  profile_section_tbl_data: `
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>:</th>
                                <td>Karthikeyan Natesan</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <th>:</th>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th>Birth Day</th>
                                <th>:</th>
                                <td>25th Oct</td>
                            </tr>
                            <tr>
                                <th>Marital Status</th>
                                <th>:</th>
                                <td>Married</td>
                            </tr>
                            <tr>
                                <th>Citizenship</th>
                                <th>:</th>
                                <td>Indian</td>
                            </tr>
                            <tr>
                                <th>Language</th>
                                <th>:</th>
                                <td>Tamil, Kannada, English</td>
                            </tr>                            
                        </tbody>
                    </table>`
};

function createProfileAppTemplate(data)
{
    var title = data.title;
    var profile_section_header = data.profile_section_header;
    var profile_section_tbl_data = data.profile_section_tbl_data;
    var html_template = `
        <!doctype html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
                <link href="/ui/profile-styles.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div class="center">
                        <img src="http://web.karthikeyannatesan.in/images/nkarthikeyan.jpg" class="img-medium"/>
                    </div>
                    <br>
                    <div class="center text-big bold">
                        Karthikeyan Natesan
                    </div>
            		<hr />
        			<div class="center menu-container">
        			    <a href="/" title="Click here to go profile home">Home</a>
        			    &nbsp;|&nbsp;
                        <a href="/personal-info" title="Click here to view Personal Info">Personal Info</a>
        			    &nbsp;|&nbsp;
        			    <a href="/personal-info" title="Click here to view Qualifications">Qualifications</a>
        			    &nbsp;|&nbsp;
        			    <a href="/personal-info" title="Click here to view Profesional Experience">Profesional Experience</a>
        			    &nbsp;|&nbsp;
        			    <a href="/personal-info" title="Click here to view Address">Address</a>
        			    &nbsp;|&nbsp;
        			    <a href="/personal-info" title="Click here to view e-Contact">e-Contact</a>
        			</div>
            		<hr />
            		<h1>${profile_section_header}</h1>
        			<div class="profile-data-container">
                        ${profile_section_tbl_data}
        			</div>            
                </div>
            </body>
        </html>
    `;
    
    return html_template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/personal-info', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'personal-info.html'));
});


app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/profile-styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile-styles.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
