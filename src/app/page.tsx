"use client";
import Head from "next/head";
import Chatbot from "./components/Chatbot";

export default function Home() {
  const headerImageUrl =
    "https://www.twiddy.com/usercontent/homepage/Beach-aerial-summer.jpg?width=1920&quality=72&format=webp";

  return (
    <div id="home" className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Twiddy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header className="text-center py-10 text-white">
        <image></image>
        <h1 className="text-4xl font-bold">Twiddy</h1>
        <p className="text-xl mt-2">Over 1,000 Outer Banks vacation rentals</p>
      </header> */}

      <header className="h-600">
        <section>
          <img
            src={headerImageUrl}
            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
            alt="Header Image"
          />
          <nav
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              padding: "10px",
              color: "white",
              marginLeft: "2rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://www.twiddy.com/usercontent/logos/celebrating45-white2.svg"
              width="170px"
            ></img>
            {/* Navbar items */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                style={{
                  marginLeft: "2rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,.5)",
                }}
                href="#"
              >
                Vacation Rentals
              </a>
              <a
                style={{
                  marginLeft: "2rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,.5)",
                }}
                href="#"
              >
                Explore OBX
              </a>
              <a
                style={{
                  marginLeft: "2rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,.5)",
                }}
                href="#"
              >
                Blog
              </a>
              <a
                style={{
                  marginLeft: "2rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,.5)",
                }}
                href="#"
              >
                Real Estate
              </a>
            </div>
          </nav>
          <div
            style={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "24px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              width: "100%",
            }}
          >
            <h1
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                fontSize: "3rem",
                fontWeight: "700",
                marginLeft: "4rem",
              }}
            >
              Over 1,000 Outer Banks vacation rentals
            </h1>
          </div>
        </section>
      </header>

      <main className="flex-1 container mx-auto mt-4">
        <Chatbot />
      </main>
    </div>
  );
}
