import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0 | Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header></Header>
      {/* Feed */}
      <Feed></Feed>
      {/* Modal */}
      <Modal></Modal>
    </div>
  );
}
