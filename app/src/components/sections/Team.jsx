import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import vasistaPng from "../../assets/vasista.png";
import jeremiahPng from "../../assets/jeremiah.png";
import pranayPng from "../../assets/pranay.png";
import aahanPng from "../../assets/aahan.png";
import aidanPng from "../../assets/aidan.png";
import deveshPng from "../../assets/devesh.png";
import harishPng from "../../assets/harish.png";
import logoPng from "../../assets/Milpitas Hacks Logo.png";
import linkedInPng from "../../assets/linkedin.png";

const Team = () => {
  return (
    <div className="flex flex-col items-center py-20 px-5  bg-gradient-to-t from-gray-950 bg-primary">
      <div className="pb-20">
        <h1 className="text-3xl font-bold ">Team</h1>
      </div>
      <div className="flex gap-5 justify-center flex-col lg:flex-row max-w-5xl w-full flex-wrap">
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-950/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-64 flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Aahan Shah
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt dark:text-gray-300"
            >
              Executive Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src={aahanPng} width="125" height="125" />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white flex justify-center items-center h-screen"
              >
                <a href="https://www.linkedin.com/in/aahan-shah/" target="_blank"><img
                  src={linkedInPng}
                  className="rounded-sm"
                  width="25"
                  height="25"
                /></a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-950/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-64 flex flex-col items-center">
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
              Executive Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src={pranayPng} width="125" height="125" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody
            className="bg-gray-950/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-64 flex flex-col items-center"
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
              Lead
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
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-950/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-64 flex flex-col items-center">
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
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody
            className="bg-gray-950/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-64 flex flex-col items-center"
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
                <a
                  href="https://www.linkedin.com/in/devesh-mamidi-678998231/"
                  target="_blank"
                >
                  <img
                    src={deveshPng}
                    width="125"
                    className="rounded-full"
                    height="125"
                  />
                </a>
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <a href="https://www.linkedin.com/in/devesh-mamidi-678998231/" target="_blank"><img
                  src={linkedInPng}
                  className="rounded-sm"
                  width="25"
                  height="25"
                /></a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-950/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-64 flex flex-col items-center">
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
                <a
                  href="https://www.linkedin.com/in/harish-manukonda-8bbb02274/"
                  target="_blank"
                >
                  <img src={harishPng} width="125" height="125" />
                </a>
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <a href="https://www.linkedin.com/in/harish-manukonda-8bbb02274/" target="_blank"><img
                  src={linkedInPng}
                  className="rounded-sm"
                  width="25"
                  height="25"
                /></a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-950/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-64 flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Aidan Hoang
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
                <img src={aidanPng} width="125" height="125" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Team;
