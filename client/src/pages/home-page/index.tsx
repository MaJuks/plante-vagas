import Footer from "@/components/home-page/footer/footer";
import Header from "@/components/home-page/headers/header";
import Main from "@/components/home-page/main/main";

export default function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
