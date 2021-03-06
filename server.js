var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var profile_visit_counter = 0;
var objProfileData = {
        'profile-home-page': {
              title: 'Karthikeyan Natesan | Profile Info',
              profile_section_header: '',
              profile_section_tbl_data: ''
        },
        'personal-info': {
              title: 'Karthikeyan Natesan | Personal Info',
              profile_section_header: 'PERSONAL INFORMATION',
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
                                            <th>Nationality</th>
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
        },
        'qualification-info': {
              title: 'Karthikeyan Natesan | Qualification Info',
              profile_section_header: 'EDUCATIONAL QUALIFICATION',
              profile_section_tbl_data: `
                                <table>
                                    <tbody>
                                        <tr>
                                            <th class="center">Qualification</th>
                                            <td>&nbsp;|&nbsp;</td>
                                            <th class="center">Institution</th>
                                            <td>&nbsp;|&nbsp;</td>
                                            <th class="center">Percentage</th>
                                            <td>&nbsp;|&nbsp;</td>
                                            <th class="center">Period</th>
                                        </tr>       
                                        <tr>
                                            <th class="center" colspan="7"><hr /></th>
                                        </tr>                                        
                                        <tr>
                                            <td>B.E Computer Science</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td>National Engineering College</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td class="center">71</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td class="center">2001 to 2005</td>
                                        </tr>
                                        <tr>
                                            <td>Diploma in Leather Technology</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td>Arulmigu Chandigeswarar Polytechnic</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td class="center">83</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td class="center">1997 to 2000</td>
                                        </tr>                                         
                                        <tr>
                                            <td>S.S.L.C</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td>P.M.H.S.S</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td class="center">70</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td class="center">1996 to 1997</td>
                                        </tr>   
                                        <tr>
                                            <th class="center" colspan="7"><hr /></th>
                                        </tr>                                         
                                    </tbody>
                                </table>`
        },
        'employment-info': {
              title: 'Karthikeyan Natesan | Employment Info',
              profile_section_header: 'EMPLOYMENT INFORMATION',
              profile_section_tbl_data: `
                                <table>
                                    <tbody>
                                        <tr>
                                            <th class="center">Organisation</th>
                                            <td>&nbsp;|&nbsp;</td>
                                            <th class="center">Designation</th>
                                            <td>&nbsp;|&nbsp;</td>
                                            <th class="center">Period</th>
                                        </tr>       
                                        <tr>
                                            <th class="center" colspan="5"><hr /></th>
                                        </tr>                                        
                                        <tr>
                                            <td>Maveric Systems Limited</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td>Assistant Manager</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td class="center">Feb, 2015 to present</td>
                                        </tr>
                                        <tr>
                                            <td>MCCI Interconnect Solutions Pvt. Ltd.</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td>Team Leader</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td class="center">May, 2010 to Jan, 2015</td>
                                        </tr>                                         
                                        <tr>
                                            <td>Acme Technologies Pvt. Ltd.</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td>Senior Software Engineer</td>
                                            <td>&nbsp;|&nbsp;</td>
                                            <td class="center">Dec, 2005 to Apr, 2010</td>
                                        </tr>   
                                        <tr>
                                            <th class="center" colspan="7"><hr /></th>
                                        </tr>                      
                                    </tbody>
                                </table>`
        }, 
        'address-info': {
              title: 'Karthikeyan Natesan | Employment Info',
              profile_section_header: 'Communication Address',
              profile_section_tbl_data: `
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>B1, 66/67, RAJ PARIS GEM, JANAKPURI 1ST STREET, 100FT. BY PASS ROAD, VELACHERY, CHENNAI, TN - 600042
											</td>
                                        </tr>   
                                    </tbody>
                                </table>
                                <hr />
                                <table>
                                    <tbody>                                
										<tr>
                                            <th><h3>Permanent Address</h3></th>
                                        </tr>
                                        <tr>
                                            <td>15-3-33/2, AMARAVATHI NAGAR, NEAR TOWN PANCHAYAT PARK, B. RENGANATHAPURAM, M.C. PURAM POST, BODI TK., THENI DT., TN - 625582
											</td>
                                        </tr> 
                                    </tbody>
                                </table>`
        },      
        'econtact-info': {
              title: 'Karthikeyan Natesan | E-Contact Info',
              profile_section_header: 'E-CONTACT',
              profile_section_tbl_data: `
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>E-Mail</th>
                                            <th>:</th>
                                            <td>karthi.ltech@gmail.com</td>
                                        </tr>      
                                        <tr>
                                            <th>Skype</th>
                                            <th>:</th>
                                            <td>nkarthi_keyan.acmet.com</td>
                                        </tr>
                                        <tr>
                                            <th>LinkedIn</th>
                                            <th>:</th>
                                            <td>in.linkedin.com/in/karthikeyannatesan05feb1982</td>
                                        </tr>
                                        <tr>
                                            <th>Facebook</th>
                                            <th>:</th>
                                            <td>http://www.facebook.com/karthikeyan.natesan.5</td>
                                        </tr>
                                        <tr>
                                            <th>Twitter</th>
                                            <th>:</th>
                                            <td>https://twitter.com/karthi_ltech</td>
                                        </tr>                                        
                                    </tbody>
                                </table>`
        },        
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
        			    <a href="/qualification-info" title="Click here to view Qualifications">Qualifications</a>
        			    &nbsp;|&nbsp;
        			    <a href="/employment-info" title="Click here to view Profesional Experience">Employment Details</a>
        			    &nbsp;|&nbsp;
        			    <a href="/address-info" title="Click here to view Address">Address</a>
        			    &nbsp;|&nbsp;
        			    <a href="/econtact-info" title="Click here to view e-Contact">E-Contact</a>
        			</div>
            		<hr />
            		<h3>${profile_section_header}</h3>
        			<div class="profile-data-container">
                        ${profile_section_tbl_data}
        			</div>            
                </div>
            </body>
        </html>
    `;
    
    return html_template;
}



app.get('/:profileSectionName', function (req, res) {
    var profileSectionName = req.params.profileSectionName;
    profileSectionName = profileSectionName.toString();

    if(profileSectionName == 'index.html') {
        res.sendFile(path.join(__dirname, 'ui', 'index.html'));
    }
    else if(profileSectionName == 'counter') {
        profile_visit_counter = profile_visit_counter + 1;
        res.send(profile_visit_counter.toString());
    }
    else {
        res.send(createProfileAppTemplate(objProfileData[profileSectionName]));
    }
});

app.get('/', function (req, res) {
    var profileSectionName = 'profile-home-page';
  res.send(createProfileAppTemplate(objProfileData[profileSectionName]));
});



/*
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/personal-info', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'personal-info.html'));
  res.send(createProfileAppTemplate(data_personal_info));
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
*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/profile-styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile-styles.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
