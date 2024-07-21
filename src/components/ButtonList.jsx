import Button from "./Button";

const ButtonList = () => {
  const buttonsList = ["All", "Gaming", "Music", "Live", "Fashion"];
  return (
    <div className="flex gap-4">
      {buttonsList?.map((button, index) => {
        return <Button key={index} name={button} />;
      })} 
    </div>
  );
};

export default ButtonList;
