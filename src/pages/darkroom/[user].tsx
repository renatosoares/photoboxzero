import { useRouter } from "next/router";
import { useEffect } from "react";
import DarkroomTemplate from "templates/Darkroom";

const useUser = () => ({ user: null, loading: false });

const Darkroom = () => {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
    }
  }, [user, loading]);

  // return <DarkroomTemplate />;
  return <section>darkroom</section>;
};

export default Darkroom;
