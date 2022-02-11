import { useRouter } from "next/router";
import DarkroomTemplate from "templates/Darkroom";
import { useAuth } from "hooks/use-auth";

const Darkroom = () => {
  return <DarkroomTemplate />;
};

export default Darkroom;
