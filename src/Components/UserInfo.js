import React, { useState } from "react";
import "./UserInfo.css";
import UserProf from "./assets/images/useprof.png";
import SandBox from "./assets/images/codesandbox.png";
import FileText from "./assets/images/file-text.svg";
import RightRectangle from "./assets/images/rightrec.png";
import LeftRectangle from "./assets/images/leftrec.png";
import Addexperience from "./Addexperience";
import Addeducate from "./Addeducate";
import EditPersonalInfo from "./EditPersonalinfo";
import ExperienceItem from "./ExperienceItem";
import EditExperience from "./EditExperience";
import EducationItem from "./EducationItem";
import EditEducation from "./EditEducation";
import SkillItem from "./SkillItem";
import EditSkill from "./EditSkill";
import AddSkill from "./AddSkill";
import edit from "./assets/images/edit.png";
import add_square from "./assets/images/add-square.png";

const UserInfo = () => {
  const [AddSkillShowing, setAddSkillShowing] = useState(false);
  const [AddExShowing, setAddExShowing] = useState(false);
  const [AddeducateShowing, setAddeducateShowing] = useState(false);

  const [EditPersonalInfoShowing, setEditPersonalInfoShowing] = useState(false);

  const [editSkillShowing, seteditSkillShowing] = useState(false);
  const [editExperienceShowing, seteditExperienceShowing] = useState(false);
  const [editEducationShowing, seteditEducationShowing] = useState(false);

  const [selectedSkill, setselectedSkill] = useState({});
  const [selectedEx, setselectedEx] = useState({});
  const [selectedEd, setselectedEd] = useState({});
  const onAddSkill = (newSkill) => {
    setAddSkillShowing(false);
    setSkills((prev) => {
      return [
        ...prev,
        {
          title: newSkill,
          id: Math.floor(Math.random() * 10000) + 3,
        },
      ];
    });
  };
  const onAddExperience = (newEx) => {
    setAddExShowing(false);
    setExperiences((prev) => {
      return [
        ...prev,
        {
          title: newEx.title,
          company: newEx.company,
          id: Math.floor(Math.random() * 10000) + 3,
        },
      ];
    });
  };
  const onAddEducation = (newEducation) => {
    setAddeducateShowing(false);
    setEducations((prev) => {
      return [
        ...prev,
        {
          title: newEducation.title,
          degree: newEducation.degree,
          id: Math.floor(Math.random() * 10000) + 3,
        },
      ];
    });
  };
  const onCancelAddSkill = (status) => {
    setAddSkillShowing(status);
  };
  const onCancelExperience = (status) => {
    setAddExShowing(status);
  };
  const onCancelEducate = (status) => {
    setAddeducateShowing(status);
  };
  const onCanclePersonalInfo = (status) => {
    setEditPersonalInfoShowing(status);
  };
  const onEditSkill = (id) => {
    setselectedSkill(
      Skills.filter((skill) => {
        return skill.id === id;
      })[0]
    );
    seteditSkillShowing(true);
  };
  const onEditExperience = (id) => {
    setselectedEx(
      Experiences.filter((ex) => {
        return ex.id === id;
      })[0]
    );
    seteditExperienceShowing(true);
  };
  const onEditEducation = (id) => {
    setselectedEd(
      Educations.filter((ed) => {
        return ed.id === id;
      })[0]
    );
    seteditEducationShowing(true);
  };
  const onCancelEditSkill = (status) => {
    seteditSkillShowing(status);
  };
  const onCancelEditExperience = (status) => {
    seteditExperienceShowing(status);
  };
  const onCancelEditEducation = (status) => {
    seteditEducationShowing(status);
  };

  const [userInfo, setuserInfo] = useState({
    firstName: "???????? ????????",
    lastName: "???? ??????????",
    username: "Golimo99",
    password: "*******",
    nationalNumber: "--",
    dateOfBirth: "--",
    phoneNumber: "0912345678",
    email: "Golimo99@gmail.com",
    address: "???? / ???????????? ????????/???????? ?????? ???????????? ?? ???????????? ??????????",
    subject: "--",
    livingState: "????",
    livingCity: "????",
    marialStatus: "????????",
    gender: "??????",
  });
  const [Experiences, setExperiences] = useState([
    { title: "???????????? ???????? ???????? ????????", company: "????????", id: 1 },
    { title: "???????????? ???????? ???????? ????????", company: "????????????????", id: 2 },
    { title: "???????????? ???????? ???????? ????????", company: "????????", id: 3 },
  ]);
  const [Educations, setEducations] = useState([
    { title: "???????????? ????????????????", degree: "????????????????", id: 1 },
    { title: "Mba", degree: "???????????????? ????????", id: 2 },
  ]);
  const [Skills, setSkills] = useState([
    { title: "?????????? ?????????? ?????????? ??????", id: 1 },
    { title: "?????????? ?????????? ???? ??????", id: 2 },
    { title: "?????????? ?????????? ???? ??????", id: 3 },
  ]);
  return (
    <React.Fragment>
      <div className="userinfo-cont">
        {AddSkillShowing && (
          <AddSkill add={onAddSkill} cancel={onCancelAddSkill} />
        )}
        {AddExShowing && (
          <Addexperience add={onAddExperience} cancel={onCancelExperience} />
        )}
        {AddeducateShowing && (
          <Addeducate add={onAddEducation} cancel={onCancelEducate} />
        )}

        {EditPersonalInfoShowing && (
          <EditPersonalInfo
            cancel={onCanclePersonalInfo}
            userInfo={userInfo}
            setuserInfo={setuserInfo}
          />
        )}
        {editSkillShowing && (
          <EditSkill
            skillInfo={selectedSkill}
            skills={Skills}
            setSkills={setSkills}
            cancel={onCancelEditSkill}
          />
        )}
        {editExperienceShowing && (
          <EditExperience
            exInfo={selectedEx}
            cancel={onCancelEditExperience}
            setEx={setExperiences}
            ex={Experiences}
          />
        )}
        {editEducationShowing && (
          <EditEducation
            edInfo={selectedEd}
            edit={onEditExperience}
            ed={Educations}
            setEd={setEducations}
            cancel={onCancelEditEducation}
          />
        )}
        <div className="right-square-container userinfo">
          <img src={RightRectangle} alt="" />
        </div>
        <div className="left-square-container userinfo">
          <img src={LeftRectangle} alt="" />
        </div>
        <main>
          <section className="sec1">
            <div className="personalInformation">
              <header className="hpi">
                <h3>?????????????? ????????</h3>
                <div
                  onClick={() => {
                    setEditPersonalInfoShowing(true);
                  }}
                  className="edit-img-cont"
                >
                  <i>????????????</i>
                  <img src={edit} className="edit-img" />
                </div>
              </header>
              <div className="profile">
                <img src={UserProf} alt="" />
                <div>
                  <h4>
                    {userInfo.firstName} {userInfo.lastName}
                  </h4>
                  <p>{userInfo.subject}</p>
                </div>
              </div>
              <div className="grid1" dir="rtl">
                <div>
                  <p>?????? ????????????</p>
                  <p>{userInfo.username}</p>
                </div>
                <div>
                  <p>?????? ????????</p>
                  <p>{userInfo.password}</p>
                </div>
                <div>
                  <p>???? ??????</p>
                  <p>{userInfo.nationalNumber}</p>
                </div>
                <div>
                  <p>?????????? ????????</p>
                  <p>{userInfo.dateOfBirth}</p>
                </div>
                <div>
                  <p>???????? ??????????</p>
                  <p>{userInfo.phoneNumber}</p>
                </div>
                <div>
                  <p>??????????</p>
                  <p>{userInfo.email}</p>
                </div>
                <div className="address">
                  <p>????????</p>
                  <p>{userInfo.address}</p>
                </div>
                <div>
                  <p>?????????? ?????? ??????????</p>
                  <p>{userInfo.livingState}</p>
                </div>
                <div>
                  <p>?????? ?????? ??????????</p>
                  <p>{userInfo.livingCity}</p>
                </div>
                <div>
                  <p>?????????? ????????</p>
                  <p>{userInfo.marialStatus}</p>
                </div>
                <div>
                  <p>??????????</p>
                  <p>{userInfo.gender}</p>
                </div>
              </div>
            </div>
          </section>
          <section className="sec2">
            <div className="skill">
              <header className="hs">
                <h3>?????????? ????</h3>
                <div className="edit-img-cont">
                  <i
                    onClick={() => {
                      setAddSkillShowing(true);
                    }}
                  >
                    ????????????
                  </i>
                  <img src={add_square} className="edit-img" />
                </div>
              </header>
              <ul dir="rtl">
                {Skills.map((skill) => {
                  return (
                    <SkillItem
                      title={skill.title}
                      key={skill.id}
                      id={skill.id}
                      edit={onEditSkill}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="experiences">
              <header className="he">
                <h3 className="flex-grow-none">?????????? ????</h3>
                <div
                  onClick={() => {
                    setAddExShowing(true);
                  }}
                  className="edit-img-cont flex-grow-none"
                >
                  <i>????????????</i>
                  <img src={add_square} className="edit-img" />
                </div>
              </header>
              <ul dir="rtl">
                {Experiences.map((ex) => {
                  return (
                    <ExperienceItem
                      title={ex.title}
                      company={ex.company}
                      id={ex.id}
                      key={ex.id}
                      edit={onEditExperience}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="records">
              <header className="hr">
                <h3>?????????? ????????????</h3>
                <div
                  onClick={() => {
                    setAddeducateShowing(true);
                  }}
                  className="edit-img-cont flex-grow-none"
                >
                  <i>????????????</i>
                  <img src={add_square} className="edit-img" />
                </div>
              </header>
              <ul dir="rtl">
                {Educations.map((ed) => {
                  return (
                    <EducationItem
                      title={ed.title}
                      degree={ed.degree}
                      key={ed.id}
                      id={ed.id}
                      edit={onEditEducation}
                      cancel={onCancelEditEducation}
                    />
                  );
                })}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
