import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Page from "@components/common/page";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>
          Tailwind Starter Template - Landing Page Template: Tailwind Toolbox
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
      </Head>

      <Header/>
      <Page></Page>      
      <Footer /> 
    </div>
  );
}
