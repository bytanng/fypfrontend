import React from 'react';
import './projectlistcontent.css';
import trackingapp from '../../../assets/tracking-app.jpg'

const ProjectListContent = () => {
  return (
    <div className='projectlistbody'>
      <div className="projectlist-grid-container">
        {/* search grid */}
        <div className="projectlist-grid-item projectlist-grid-1">
          <h3 style={{ fontWeight: '400' }}>Project list</h3>
          <form className='projectlistsearchForm'>
            <input type="text" className='projectlistsearchBar' placeholder="Search for projects" required></input>
            <button type="submit" className='projectlistsearchBtn' value='send'>Go</button>
          </form>
        </div>

        <div className='projectlist-grid-container2'>
          {/* filter grid */}
          <div className="projectlist-grid-item projectlist-grid-2">
            <h3 style={{ fontWeight: '400' }}>Filters</h3>
            <hr style={{ marginTop: '1rem' }} />
            <form className='categoryfilter'>
              <p className='filtertitle'>Category<a href="" className='clearbtn'>Clear</a></p>
              <div>
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" className='projectlistfiltersearchBar' placeholder="Search category" required></input>
              </div>
              <div>
                <input type="checkbox" className='listchkbox' id="sftchkbox" name="sftchkbox" value="sft"></input>
                <label for="sftchkbox" className='listchkboxname'>Software</label>
              </div>
              <div>
                <input type="checkbox" className='listchkbox' id="machkbox" name="machkbox" value="ma"></input>
                <label for="machkbox" className='listchkboxname'>Mobile Application</label>
              </div>
            </form>

            <form className='skillsreqfilter'>
              <p className='filtertitle'>Skills Required<a href="" className='clearbtn'>Clear</a></p>
              <div>
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" className='projectlistfiltersearchBar' placeholder="Search skills" required></input>
              </div>
              <div>
                <input type="checkbox" className='listchkbox' id="skillschkbox" name="skillschkbox" value="skills1"></input>
                <label for="skillschkchkbox" className='listchkboxname'>Flutter</label>
              </div>
              <div>
                <input type="checkbox" className='listchkbox' id="skills2chkbox" name="skills2chkbox" value="skills2"></input>
                <label for="skills2chkbox" className='listchkboxname'>Dart</label>
              </div>
            </form>

            <form className='phasefilter'>
              <p className='filtertitle'>Phase<a href="" className='clearbtn'>Clear</a></p>
              <div>
                <input type="checkbox" className='listchkbox' id="phasechkbox" name="phasechkbox" value="onboarding"></input>
                <label for="phasechkchkbox" className='listchkboxname'>Onboarding</label>
              </div>
              <div>
                <input type="checkbox" className='listchkbox' id="phase2chkbox" name="phase2chkbox" value="initiation"></input>
                <label for="phase2chkchkbox" className='listchkboxname'>Initiation</label>
              </div>
              <div>
                <input type="checkbox" className='listchkbox' id="phase3chkbox" name="phase3chkbox" value="execution"></input>
                <label for="phase3chkchkbox" className='listchkboxname'>Execution</label>
              </div>
              <div>
                <input type="checkbox" className='listchkbox' id="phase4chkbox" name="phase4chkbox" value="closed"></input>
                <label for="phase4chkchkbox" className='listchkboxname'>Closed</label>
              </div>
            </form>
            <form className='recfilter'>
              <p className='filtertitle'>Recruiting<a href="" className='clearbtn'>Clear</a></p>
              <div>
                <input type="checkbox" className='listchkbox' id="recchkbox" name="recchkbox" value="open"></input>
                <label for="recchkchkbox" className='listchkboxname'>Open</label>
              </div>
              <div>
                <input type="checkbox" className='listchkbox' id="rec2chkbox" name="rec2chkbox" value="closed"></input>
                <label for="rec2chkchkbox" className='listchkboxname'>Closed</label>
              </div>
            </form>
          </div>

          {/* result grid */}
          <div className="projectlist-grid-item projectlist-grid-3">
            <div className='projectlistresultstitle'>
              <h3 style={{ fontWeight: '400' }}>Top Results</h3>
              <span style={{ fontSize: 'small', marginLeft: '1rem', fontWeight: '350' }}>1-10 of 150 results</span>
              <div className='projectlistsorting'>
                Sort by:
                <select id="select" className='projectroleselector'>
                  <option value="">Popularity</option>
                  <option value="">Dated Posted</option>
                  <option value="">Alphabatical</option>
                  <option value="">Phase</option>
                  <option value="">Recruiting</option>
                </select>
              </div>
            </div>
            <hr style={{ margin: '1rem 0' }} />
            <div className='projectlistresults'>
              <div className='projectbarresult-grid-container'>
                <div className='projectbarresult-grid-1'>
                  <img src={trackingapp} className="projectimg" />
                </div>
                <div className='projectbarresult-flex'>
                  <div className='projectbarresult-grid-2'>
                    <h3 style={{ fontWeight: '400' }}>Mobile Tracking App</h3>
                  </div>
                  <div className='projectbarresult-grid-3'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                  </div>
                  <div className='projectbarresult-grid-4'>
                    <p style={{ marginBottom: '0.5rem' }}>Role: <span style={{ fontWeight: '400', fontSize: '0.9rem' }}>Software Engineer</span></p>
                    <div className='projectskillsets'>
                      <span style={{ marginRight: '0.5rem' }}>Skillsets:</span>
                      <a href="/" className='projectlistskillstag'>Flutter</a>
                      <a href="/" className='projectlistskillstag'>Dart</a>
                      <a href="/" className='projectlistskillstag'>SQL</a>
                    </div>
                  </div>
                  <div className='projectbarresult-grid-5'>
                    <span className='projectlistphase'>Onboarding</span>
                    <span>Recruiting: <span style={{ color: '#09CE78' }}>&nbsp;Open</span></span>
                  </div>
                  <div className='projectbarresult-grid-6'>
                    Posted 6 days ago
                  </div>
                </div>
              </div>

              <div className='projectbarresult-grid-container'>
                <div className='projectbarresult-grid-1'>
                  <img src={trackingapp} className="projectimg" />
                </div>
                <div className='projectbarresult-flex'>
                  <div className='projectbarresult-grid-2'>
                    <h3 style={{ fontWeight: '400' }}>Mobile Tracking App</h3>
                  </div>
                  <div className='projectbarresult-grid-3'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                  </div>
                  <div className='projectbarresult-grid-4'>
                    <p style={{ marginBottom: '0.5rem' }}>Role: <span style={{ fontWeight: '400', fontSize: '0.9rem' }}>Software Engineer</span></p>
                    <div className='projectskillsets'>
                      <span style={{ marginRight: '0.5rem' }}>Skillsets:</span>
                      <a href="/" className='projectlistskillstag'>Flutter</a>
                      <a href="/" className='projectlistskillstag'>Dart</a>
                      <a href="/" className='projectlistskillstag'>SQL</a>
                    </div>
                  </div>
                  <div className='projectbarresult-grid-5'>
                    <span className='projectlistphase'>Onboarding</span>
                    <span>Recruiting: <span style={{ color: '#09CE78' }}>&nbsp;Open</span></span>
                  </div>
                  <div className='projectbarresult-grid-6'>
                    Posted 6 days ago
                  </div>
                </div>
              </div>

              
              
              
              <div class="projectlistpagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#" class="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListContent;
