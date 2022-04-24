import React from "react";
import "./JobPage.scss";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/system-ui/Button/Button";
import Share from "../../components/system-ui/Share/Share";

const JobPage = () => {
  const { job_id } = useParams();

  return (
    <main id="jobpage">
      <div className="job-container">
        <div className="job-content">
          <div className="job-content__title">
            <h2>
              <span>Software Engineer (Full-time)</span>{" "}
              <Button label="Apply Now" to="/" />
            </h2>
            <div className="save-job"></div>
            <p>
              Posted by{" "}
              <Link to="/" className="link">
                Flight Global
              </Link>{" "}
              on Monday 8th March
            </p>
          </div>
          <div className="job-content__description">
            <p>
              Leading FinTech has an opportunity for a Software Integration
              Engineer to develop interfaces and integrations for new and
              existing client solutions. You&apos;ll gain exposure to new
              technology, work directly with clients and the development team,
              and have an oversight of all areas of automation and integration.
            </p>
            <p>
              The job comes with a starting salary of £65K p.a. with generous
              benefits, including a bonus, flexible working, rising pension
              contribution, 25 days holiday (with an option to buy/sell up to 5
              days), and income protection, medical insurance etc.
            </p>
            <p>
              This would suit a support analyst or engineer with good SQL skills
              and the desire to interconnect systems and automate processes.
            </p>
            <p>
              <strong>
                Required skills and experience as Software Integration Engineer
              </strong>
            </p>
            <p>
              SQL to an advanced level in terms of data manipulation and
              management Programming skills in any OOP, such as C#, Java, Python
              etc. Know how to create, read, and edit XML documents
            </p>
            <p>
              <strong>
                Primary responsibilities as Software Integration Engineer
              </strong>
            </p>
            <p>
              Design and development of automated solutions to improve
              efficiencies and reduce errors Participate in the Site Reliability
              Engineering process Implement monitoring for key business
              processes and metrics Implement solutions to the production
              environment Collaborate with internal teams to support the
              implementation of your solution
            </p>
            <p>
              <strong>
                What&apos;s on offer as Software Integration Engineer
              </strong>
            </p>
            <ul>
              <li>
                Use new and innovative technologies and tools and develop your
                skills
              </li>
              <li>
                A technology innovator with an enviable reputation for
                innovation, market position, and growth
              </li>
              <li>
                Generous remuneration and impressive earning potential through
                the discretionary bonus
              </li>
              <li>
                A positive culture and great team spirit Career progression
              </li>
            </ul>
            <p>
              <strong>Working hours are Monday to Friday, 9am to 5.30pm</strong>
            </p>
            <p>
              For more information on how we process your data, see our privacy
              notice at www.lead-search.co.uk
            </p>
          </div>
        </div>
        <div className="job-quick-details">
          <Button label="Apply Now" to="/" />
          <div className="job-quick-details__container">
            <ul>
              <li>Quick Details</li>
              <li>
                Salary <span>£65,000 per annum</span>
              </li>
              <li>
                Required Skills
                <ol>
                  <li>Team communication</li>
                  <li>Creative Thinker</li>
                  <li>Good under pressure</li>
                </ol>
              </li>
              <li>
                Where <span>Central Londong</span>
              </li>
              <li>
                Type <span>Permanent</span>
              </li>
              <li>
                Date Posted <span>8th March 2022</span>
              </li>
            </ul>
            <Share className="job-quick-details__share" />
          </div>
        </div>
      </div>
      <div className="related-jobs">Hi</div>
    </main>
  );
};

export default JobPage;
