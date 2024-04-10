import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { BackgroundGradient } from "../ui/background-gradient";
import vasistaPng from "../../assets/vasista.png";
import jeremiahPng from "../../assets/jeremiah.png";
import pranayPng from "../../assets/pranay.png";
import aahanPng from "../../assets/aahan.png";
import jerryPng from "../../assets/jerry.jpg";
import deveshPng from "../../assets/devesh.png";
import harishPng from "../../assets/harish.png";
import vedPng from "../../assets/ved.png"
import oliverPng from "../../assets/oliver.png"
import logoPng from "../../assets/Milpitas Hacks Logo.png";
import linkedInPng from "../../assets/linkedin.png";
import raviPng from "../../assets/ravi.jpg";
import nikunjPng from "../../assets/nikunj.jpeg";

const Team = () => {
  return (
    <div className="flex flex-col items-center py-20 px-5  bg-gradient-to-t from-gray-950 to-gray-900">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold ">Team</h1>
      </div>

      <div className="flex flex-row items-center pb-20 px-5 gap-10">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <img
            src={raviPng}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-full"
          />
          <p className="text-base text-center sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Ravi Annavajjhala
          </p>

          <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
            CEO of Kinara, Inc.<br />MBA in Finance and Marketing at the Wharton School of the University of Pennsylvania
          </p>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <img
            src={nikunjPng}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-full"
          />
          <p className="text-base text-center sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Nikunj Mehta
          </p>

          <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
            Founder and CEO of Falkonry<br />Co-Founder of Industry 4.0 Club<br />PhD in Computer Science at the University of Southern California
          </p>
        </BackgroundGradient>
      </div>

      <div className="flex gap-5 justify-center flex-col lg:flex-row max-w-5xl w-full flex-wrap">
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-64 flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center shadow-2xl"
            >
              Aahan Shah
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt dark:text-gray-300"
            >
              Founder and Executive Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img
                  className="rounded-full"
                  src={aahanPng}
                  width="125"
                  height="125"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white flex w-full justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/aahan-shah/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-64 flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Pranay Jain
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt dark:text-gray-300"
            >
              Founder and Executive Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src={pranayPng} width="125" height="125" />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white w-full flex justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/pranay-jain-59563223a/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody
            className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-64 flex flex-col items-center"
            flex
            flex-col
            items-center
          >
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Vasista Ramachandruni
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt dark:text-gray-300"
            >
              Lead and Head of Operations
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img
                  src={vasistaPng}
                  width="125"
                  className="rounded-full"
                  height="125"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white w-full flex justify-center"
              >
                <a href="https://www.linkedin.com/in/vasistar/" target="_blank">
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-64 flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Jeremiah de Guzman
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt dark:text-gray-300"
            >
              Tech Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img
                  src={jeremiahPng}
                  className="rounded-full"
                  width="125"
                  height="125"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white w-full flex justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/jeremiahjohnmari-de-guzman-02b8002ba/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody
            className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-64 flex flex-col items-center"
            flex
            flex-col
            items-center
          >
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Devesh Mamidi
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt dark:text-gray-300"
            >
              Tech
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img
                  src={deveshPng}
                  width="125"
                  className="rounded-full"
                  height="125"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white w-full flex justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/devesh-mamidi-678998231/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody
            className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-64 flex flex-col items-center"
            flex
            flex-col
            items-center
          >
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Harish Manukonda
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt dark:text-gray-300"
            >
              Finances
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src={harishPng} width="125" height="125" />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white flex w-full justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/harish-manukonda-8bbb02274/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody
            className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-64 flex flex-col items-center"
            flex
            flex-col
            items-center
          >
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Ved Vyas
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt dark:text-gray-300"
            >
              Sponsors
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src={vedPng} width="125" height="125" />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white flex w-full justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/ved-vyas-4721392ab/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody
            className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-64 flex flex-col items-center"
            flex
            flex-col
            items-center
          >
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Jerry Yong
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt dark:text-gray-300"
            >
              Sponsors
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src={jerryPng} className="rounded-full w-[125px] h-[125px] object-cover" width="125" height="125" />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white flex w-full justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/jy-jerry-yong"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

      </div>
    </div>
  );
};

export default Team;
