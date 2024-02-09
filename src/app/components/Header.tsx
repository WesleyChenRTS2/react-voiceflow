import Navbar from "./Navbar";

const Header = () => {
  const headerImageUrl =
    "https://www.twiddy.com/usercontent/homepage/Beach-aerial-summer.jpg?width=1920&quality=72&format=webp";

  return (
    <>
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
      <Navbar />
    </>
  );
};

export default Header;
