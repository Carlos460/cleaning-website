interface ITeamCard {
  name: string;
  jobTitle: string;
  image: string;
}

export default function TeamCard(props: ITeamCard) {
  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: `cover`,
  };

  return (
    <>
      <div
        className="flex justify-center items-end w-96 h-96 bg-blue-400 mx-auto rounded-lg mb-5 gap-1 object-cover"
        style={cardStyle}
      >
        <div className="relative lg:w-80 translate-y-10 w-80 pt-10 pb-10 border border-solid rounded-2xl bg-white">
          <div className="flex flex-col gap-1 text-left ps-10">
            <h3 className="font-semibold text-2xl">{props.name}</h3>
            <p className="text-blue-500 font-medium text-lg">
              {props.jobTitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
