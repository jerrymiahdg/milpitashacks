import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import vasistaPng from "../../assets/vasista.png";
import logoPng from "../../assets/circle-logo.png";

const Team = () => {
  return (
    <div className="flex flex-col items-center p-20">
      <div className="pb-20">
        <h1 className="text-3xl font-bold ">Team</h1>
      </div>
      <div className="flex gap-10 justify-center flex-col 2xl:flex-row max-w-2xl w-full">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white text-center"
            >
              Aahan Shah
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt-2 dark:text-gray-300"
            >
              Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src={logoPng} width="175" height="175" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white text-center"
            >
              Pranay Jain
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt-2 dark:text-gray-300"
            >
              Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img src={logoPng} width="175" height="175" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] shadow-lg dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white text-center"
            >
              Vasista Ramachandruni
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-500 text-sm max-w-sm mt-2 dark:text-gray-300"
            >
              Tech Lead and Operations
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img
                  src={vasistaPng}
                  width="175"
                  className="rounded-full"
                  height="175"
                />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Team;
