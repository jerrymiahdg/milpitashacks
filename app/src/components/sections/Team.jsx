import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import vasistaPng from "../../assets/vasista.png";
import logoPng from "../../assets/Milpitas Hacks Logo.png";

const Team = () => {
  return (
    <div className="flex flex-col items-center py-20 px-5">
      <div className="pb-20">
        <h1 className="text-3xl font-bold ">Team</h1>
      </div>
      <div className="flex gap-5 justify-center flex-col lg:flex-row max-w-5xl w-full flex-wrap">
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-60 flex flex-col items-center">
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
                <img src={logoPng} width="125" height="125" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-60 flex flex-col items-center">
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
                <img src={logoPng} width="125" height="125" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody
            className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-60 flex flex-col items-center"
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
          <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-60 flex flex-col items-center">
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
                <img src={logoPng} width="125" height="125" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody
            className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-60 flex flex-col items-center"
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
                  src={logoPng}
                  width="125"
                  className="rounded-full"
                  height="125"
                />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-60 flex flex-col items-center">
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
              Sponsors
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src={logoPng} width="125" height="125" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-60 flex flex-col items-center">
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
                <img src={logoPng} width="125" height="125" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Team;
