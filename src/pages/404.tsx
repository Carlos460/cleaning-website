import Navbar from '@/widgets/Navbar';
import Footer from '@/widgets/Footer';
import { Title, SubTitle } from '@/components/Typography';
import Wrapper from '@/components/Wrapper';
import '../app/globals.css';
import Button from '@/components/Button';
import Link from 'next/link';
import AnimatePresence from '@/components/AnimatePresence';

export default function Custom404() {
  return (
    <>
      <Navbar />

      <Wrapper>
        <section className="pt-80 pb-32 flex flex-col gap-5">
          <AnimatePresence>
            <h1 className="text-8xl text-gray-800 font-bold">Oops!!!</h1>
          </AnimatePresence>
          <AnimatePresence delay={0.1}>
            <SubTitle>Sorry, this page dosn&apos;t exist...</SubTitle>
          </AnimatePresence>
          <AnimatePresence delay={0.2}>
            <Link href="/">
              <Button> Go back to Homepage </Button>
            </Link>
          </AnimatePresence>
        </section>
      </Wrapper>
      <Footer />
    </>
  );
}
