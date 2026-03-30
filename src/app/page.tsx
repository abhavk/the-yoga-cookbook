import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Recipes from "@/components/Recipes";
import FoodLog from "@/components/FoodLog";
import BookDetails from "@/components/BookDetails";
import AuthorBio from "@/components/AuthorBio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Recipes />
        <FoodLog />
        <BookDetails />
        <AuthorBio />
      </main>
      <Footer />
    </>
  );
}
