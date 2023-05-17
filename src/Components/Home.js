import { lazy, Suspense } from "react";
import Loading from "./UI/Loading";
import { Box, Container, Round, Section } from "../Styles/Home";
import imgReact from "../logo.svg";
import { HOME } from "./utils/const";

const TextWriter = lazy(() => import("../Components/UI/TextWriter"));
const CoverVideo = lazy(() => import("./UI/CoverVideo"));

const Home = () => {
  return (
    <Section id={HOME.path}>
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TextWriter />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <CoverVideo />
          </Suspense>
        </Box>
        <Round>
          <img src={imgReact} width={500} height={400} alt="React" />
        </Round>
      </Container>
    </Section>
  );
};

export default Home;
