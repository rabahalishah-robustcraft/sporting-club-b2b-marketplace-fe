import heroImage from "./../assets/landingPage/HERO.webp";
const LandingPage = () => {
  const Navbar = () => {
    return (
      <header className="py-4 px-4 lg:px-24 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center">
          <img
            src="/src/assets/logo/SPORTS_CORP_LOGO.webp"
            alt="Sports Corp Logo"
            className="h-8"
          />
        </div>
        <nav className="hidden lg:flex space-x-8 items-center text-gray-700 font-medium">
          <a
            href="#"
            className="hover:text-black transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-black transition-colors duration-300"
          >
            Product
          </a>
          <a
            href="#"
            className="hover:text-black transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-black transition-colors duration-300"
          >
            Blog
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="/club/login" className="text-black font-medium">
            Login
          </a>
          <button className="bg-black/90 text-white font-normal py-3 px-8 rounded-md hover:bg-black transition duration-300">
            Get Started
          </button>
        </div>
      </header>
    );
  };

  // Screen 1: Hero Section
  const HeroSection = () => {
    return (
      <section
        id="herosection"
        className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden"
      >
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          draggable={false}
        />
        <div className="bg-black opacity-50 absolute inset-0 z-10"></div>
        <div className="container mx-auto text-center relative z-20 p-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-4">
            Unlock Savings and <br /> Opportunities with TSC+
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto font-light">
            TSC Connect is your go-to B2B marketplace, connecting sporting clubs
            with local businesses for unbeatable deals. Maximize your buying
            power and discover new opportunities today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/club/signup">
              <button className="bg-primary/90 text-white font-normal py-3 px-8 rounded-md hover:bg-primary transition duration-300 w-full sm:w-auto">
                Register as a Club
              </button>
            </a>
            <a href="/business/signup">
              <button className="bg-[#eebf47]  text-black font-normal py-3 px-8 rounded-md hover:bg-yellow-500 transition duration-300 w-full sm:w-auto">
                Register as a Business
              </button>
            </a>
          </div>
        </div>
      </section>
    );
  };

  // Screen 2: Unified Marketplace Experience
  const UnifiedMarketplace = () => {
    return (
      <section className="py-20 px-4  sm:px-6 lg:px-24 bg-[#DAE2CB] overflow-x-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              Empowering Clubs and Businesses Through a Unified Marketplace
              Experience
            </h2>
            <p className="text-black text-lg">
              Clubs often face fragmented purchasing power, leading to inflated
              costs and missed savings. Our platform bridges this gap, allowing
              clubs to leverage bulk purchasing while businesses gain access to
              targeted opportunities for growth.
            </p>
          </div>
          <div className="flex justify-center relative translate-x-2/5">
            <img
              src="/src/assets/landingPage/DASHBOARD.png"
              alt="Unified Marketplace UI Mockup"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    );
  };

  // Screen 3: Value for Your Club
  const ValueForClub = () => {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="container mx-auto text-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
            Unlock Greater Value for Your Club <br /> with TSC Connect
            Marketplace
          </h2>
          <a href="/club/signup">
            <button className="bg-primary/90 text-white font-normal py-3 px-8 rounded-md hover:bg-primary transition duration-300">
              Register as a Club
            </button>
          </a>
          <div className="my-10 border-t border-gray-300 w-24 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col items-start text-start">
              <div className="mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.4045 9.10746C8.9235 9.10746 8.51933 8.94297 8.192 8.61397C7.86467 8.28497 7.701 7.87913 7.701 7.39646C7.701 6.9138 7.86467 6.50863 8.192 6.18096C8.51933 5.85296 8.9235 5.68896 9.4045 5.68896H38.5955C39.0755 5.68896 39.4813 5.8558 39.813 6.18946C40.145 6.52346 40.311 6.93163 40.311 7.41396C40.311 7.89663 40.145 8.29963 39.813 8.62296C39.4813 8.94596 39.0755 9.10746 38.5955 9.10746H9.4045Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-normal mb-2">
                Maximize Your Club’s Potential with Strategic Purchasing
              </h3>
              <p className="text-gray-600 text-sm">
                Increase your buying power by leveraging bulk purchasing for
                essential goods.
              </p>
            </div>
            <div className="flex flex-col items-start text-start">
              <div className="mb-4">
                <svg
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4776 34.1185L31.0036 28.539C31.5339 28.207 31.7991 27.7365 31.7991 27.1275C31.7991 26.5185 31.5339 26.0442 31.0036 25.7045L22.5276 20.063C21.9636 19.69 21.3791 19.662 20.7741 19.979C20.1691 20.296 19.8666 20.8005 19.8666 21.4925V32.689C19.8666 33.385 20.1608 33.8925 20.7491 34.2115C21.3374 34.5305 21.9136 34.4995 22.4776 34.1185ZM7.77411 42.299C6.85411 42.299 6.05645 41.9612 5.38111 41.2855C4.70545 40.6102 4.36761 39.8125 4.36761 38.8925V13.548C4.36761 13.068 4.53128 12.6622 4.85861 12.3305C5.18595 11.9985 5.59011 11.8325 6.07111 11.8325H16.3916V6.83253C16.3916 5.92086 16.7294 5.12519 17.4051 4.44552C18.0804 3.76586 18.8781 3.42603 19.7981 3.42603H29.5351C30.4551 3.42603 31.2528 3.76586 31.9281 4.44552C32.6038 5.12519 32.9416 5.92086 32.9416 6.83253V11.8325H43.2621C43.7421 11.8325 44.1479 11.9985 44.4796 12.3305C44.8116 12.6622 44.9776 13.068 44.9776 13.548V38.8925C44.9776 39.8125 44.6386 40.6102 43.9606 41.2855C43.2829 41.9612 42.4824 42.299 41.5591 42.299H7.77411ZM7.77411 38.8925H41.5591V15.251H7.77411V38.8925ZM19.7981 11.8325H29.5351V6.83253H19.7981V11.8325Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-normal mb-2">
                Simplify Your Procurement Process with Tailored Offers
              </h3>
              <p className="text-gray-600 text-sm">
                Easily upload your annual spend data to receive customized
                offers from local suppliers.
              </p>
            </div>
            <div className="flex flex-col items-start text-start">
              <div className="mb-4">
                <svg
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.6334 40.225H32.2649C31.7999 40.225 31.4117 40.0665 31.1004 39.7495C30.789 39.4325 30.6334 39.0403 30.6334 38.573C30.6334 38.1053 30.791 37.718 31.1064 37.411C31.4217 37.1036 31.8119 36.95 32.2769 36.95H36.6334V32.5815C36.6334 32.1165 36.7919 31.7283 37.1089 31.417C37.4259 31.1056 37.8182 30.95 38.2859 30.95C38.7532 30.95 39.1404 31.1056 39.4474 31.417C39.7547 31.7283 39.9084 32.1165 39.9084 32.5815V36.95H44.2769C44.7419 36.95 45.13 37.1065 45.4414 37.4195C45.7527 37.7328 45.9084 38.1231 45.9084 38.5905C45.9084 39.0578 45.7527 39.447 45.4414 39.758C45.13 40.0693 44.7419 40.225 44.2769 40.225H39.9084V44.6435C39.9084 45.1085 39.7519 45.4966 39.4389 45.808C39.1255 46.1193 38.7352 46.275 38.2679 46.275C37.8005 46.275 37.4114 46.1173 37.1004 45.802C36.789 45.4866 36.6334 45.0965 36.6334 44.6315V40.225ZM7.00936 40.3565C6.52869 40.3565 6.12469 40.1928 5.79736 39.8655C5.47003 39.5381 5.30636 39.1341 5.30636 38.6535V27.5065H4.06586C3.53086 27.5065 3.10053 27.3031 2.77486 26.8965C2.44953 26.4901 2.34069 26.0258 2.44836 25.5035L4.70836 15.3555C4.78303 14.9488 4.97769 14.6213 5.29236 14.373C5.60736 14.1243 5.95986 14 6.34986 14H34.0734C34.4714 14 34.8277 14.1243 35.1424 14.373C35.4574 14.6213 35.6522 14.9488 35.7269 15.3555L37.8789 25.0965C37.9949 25.6111 37.888 26.0736 37.5584 26.484C37.229 26.8946 36.8007 27.1 36.2734 27.1H35.1334V33.7465C35.1334 34.2275 34.9689 34.6316 34.6399 34.959C34.3109 35.2863 33.9047 35.45 33.4214 35.45C32.938 35.45 32.5349 35.2863 32.2119 34.959C31.8885 34.6316 31.7269 34.2275 31.7269 33.7465V27.375H21.4649V38.6535C21.4649 39.1341 21.3012 39.5381 20.9739 39.8655C20.6465 40.1928 20.2425 40.3565 19.7619 40.3565H7.00936ZM8.71286 36.95H18.0584V27.5065H8.71286V36.95ZM6.61386 11C6.14886 11 5.76069 10.8415 5.44936 10.5245C5.13803 10.2075 4.98236 9.81514 4.98236 9.34748C4.98236 8.88014 5.14003 8.49297 5.45536 8.18597C5.77069 7.87864 6.16086 7.72498 6.62586 7.72498H33.8594C34.3244 7.72498 34.7125 7.88148 35.0239 8.19448C35.3352 8.50781 35.4909 8.89814 35.4909 9.36548C35.4909 9.83281 35.3332 10.222 35.0179 10.533C34.7025 10.8443 34.3124 11 33.8474 11H6.61386ZM6.18886 24.1H34.3464L32.8564 17.4065H7.66686L6.18886 24.1Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-normal mb-2">
                Engage in Secure and Transparent Deal-Making
              </h3>
              <p className="text-gray-600 text-sm">
                Anonymously connect with businesses and finalize deals through
                our moderated platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Screen 4: Opportunities for Your Business
  const BusinessOpportunities = () => {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-gray-100">
        <div className="container mx-auto text-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
            Unlock Targeted Opportunities for <br /> Your Business in the Sports{" "}
            <br />
            Marketplace
          </h2>
          <a href="/club/signup">
            <button className="bg-primary/90 text-white font-normal py-3 px-8 rounded-md hover:bg-primary transition duration-300">
              Register as a Club
            </button>
          </a>
          <div className="my-10 border-t border-gray-300 w-24 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col items-start text-start">
              <div className="mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 34.8804C35.0337 34.8804 37.6055 33.8174 39.7155 31.6914C41.8255 29.5651 42.8805 26.9938 42.8805 23.9774C42.8805 20.9608 41.8255 18.3969 39.7155 16.2859C37.6055 14.1749 35.0337 13.1194 32 13.1194C31.0453 13.1194 30.1173 13.2399 29.216 13.4809C28.3143 13.7219 27.4745 14.0663 26.6965 14.5139C27.8062 15.7886 28.684 17.2288 29.33 18.8344C29.976 20.4401 30.299 22.1628 30.299 24.0024C30.299 25.8421 29.976 27.5639 29.33 29.1679C28.684 30.7719 27.8062 32.2113 26.6965 33.4859C27.4745 33.9336 28.3143 34.2779 29.216 34.5189C30.1173 34.7599 31.0453 34.8804 32 34.8804ZM24 31.3464C24.892 30.3988 25.5952 29.2879 26.1095 28.0139C26.6235 26.7403 26.8805 25.3981 26.8805 23.9874C26.8805 22.5768 26.6235 21.2388 26.1095 19.9734C25.5952 18.7078 24.892 17.6011 24 16.6534C23.108 17.6011 22.4048 18.7119 21.8905 19.9859C21.3765 21.2596 21.1195 22.6018 21.1195 24.0124C21.1195 25.4231 21.3765 26.7611 21.8905 28.0264C22.4048 29.2921 23.108 30.3988 24 31.3464ZM16 34.8804C16.9547 34.8804 17.8827 34.7601 18.784 34.5194C19.6857 34.2784 20.5293 33.9339 21.315 33.4859C20.1977 32.2113 19.316 30.7711 18.67 29.1654C18.024 27.5598 17.701 25.8371 17.701 23.9974C17.701 22.1578 18.024 20.4359 18.67 18.8319C19.316 17.2279 20.1977 15.7886 21.315 14.5139C20.5293 14.0659 19.6857 13.7214 18.784 13.4804C17.8827 13.2398 16.9547 13.1194 16 13.1194C12.9897 13.1194 10.4237 14.1743 8.302 16.2839C6.18033 18.3936 5.1195 20.9566 5.1195 23.9729C5.1195 26.9896 6.18033 29.5616 8.302 31.6889C10.4237 33.8166 12.9897 34.8804 16 34.8804ZM16 38.2989C12.022 38.2989 8.64433 36.9101 5.867 34.1324C3.08967 31.3548 1.701 27.9766 1.701 23.9979C1.701 20.0196 3.08967 16.6423 5.867 13.8659C8.64433 11.0893 12.022 9.70093 16 9.70093C17.5 9.70093 18.9237 9.91376 20.271 10.3394C21.618 10.7648 22.861 11.3694 24 12.1534C25.139 11.3694 26.382 10.7648 27.729 10.3394C29.0763 9.91376 30.5 9.70093 32 9.70093C35.978 9.70093 39.3557 11.0898 42.133 13.8674C44.9103 16.6451 46.299 20.0233 46.299 24.0019C46.299 27.9803 44.9103 31.3576 42.133 34.1339C39.3557 36.9106 35.978 38.2989 32 38.2989C30.5 38.2989 29.0763 38.0861 27.729 37.6604C26.382 37.2351 25.139 36.6304 24 35.8464C22.861 36.6304 21.618 37.2351 20.271 37.6604C18.9237 38.0861 17.5 38.2989 16 38.2989Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Maximize Your Visibility with Flexible Commission Options
              </h3>
              <p className="text-gray-600 text-sm">
                Gain access to opportunities tailored specifically to your
                business category.
              </p>
            </div>
            <div className="flex flex-col items-start text-start">
              <div className="mb-4">
                <svg
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7752 38.275C19.3288 38.275 16.4213 37.09 14.0527 34.72C11.6837 32.3497 10.4992 29.443 10.4992 26C10.4992 25.6547 10.5138 25.2985 10.5432 24.9315C10.5725 24.5649 10.6165 24.2435 10.6752 23.9675C10.5245 24.0182 10.3485 24.0582 10.1472 24.0875C9.94582 24.1169 9.77515 24.1315 9.63515 24.1315C8.09049 24.1315 6.82432 23.6392 5.83665 22.6545C4.84932 21.6695 4.35565 20.4065 4.35565 18.8655C4.35565 17.3209 4.84432 16.054 5.82165 15.065C6.79865 14.076 8.05799 13.5815 9.59965 13.5815C10.666 13.5815 11.6553 13.8959 12.5677 14.5245C13.48 15.1532 14.1355 15.9342 14.5342 16.8675C15.5355 15.9739 16.7585 15.2267 18.2032 14.626C19.6478 14.0254 21.1882 13.725 22.8242 13.725H43.2742C43.7635 13.725 44.1697 13.8867 44.4927 14.21C44.816 14.533 44.9776 14.9392 44.9776 15.4285V18.2965C44.9776 18.7859 44.816 19.192 44.4927 19.515C44.1697 19.8384 43.7635 20 43.2742 20H35.0492V26C35.0492 29.443 33.8642 32.3497 31.4942 34.72C29.1242 37.09 26.2178 38.275 22.7752 38.275ZM9.63065 20.8685C10.2307 20.8685 10.714 20.6852 11.0807 20.3185C11.4473 19.9519 11.6307 19.4685 11.6307 18.8685C11.6307 18.2685 11.4473 17.7852 11.0807 17.4185C10.714 17.0519 10.2307 16.8685 9.63065 16.8685C9.03065 16.8685 8.54732 17.0519 8.18065 17.4185C7.81399 17.7852 7.63065 18.2685 7.63065 18.8685C7.63065 19.4685 7.81399 19.9519 8.18065 20.3185C8.54732 20.6852 9.03065 20.8685 9.63065 20.8685ZM22.7742 33C24.7742 33 26.4408 32.3334 27.7742 31C29.1075 29.6667 29.7742 28 29.7742 26C29.7742 24 29.1075 22.3334 27.7742 21C26.4408 19.6667 24.7742 19 22.7742 19C20.7742 19 19.1075 19.6667 17.7742 21C16.4408 22.3334 15.7742 24 15.7742 26C15.7742 28 16.4408 29.6667 17.7742 31C19.1075 32.3334 20.7742 33 22.7742 33ZM22.7742 30C23.8742 30 24.8158 29.6084 25.5992 28.825C26.3825 28.0417 26.7742 27.1 26.7742 26C26.7742 24.9 26.3825 23.9584 25.5992 23.175C24.8158 22.3917 23.8742 22 22.7742 22C21.6742 22 20.7325 22.3917 19.9492 23.175C19.1658 23.9584 18.7742 24.9 18.7742 26C18.7742 27.1 19.1658 28.0417 19.9492 28.825C20.7325 29.6084 21.6742 30 22.7742 30Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Expand Your Client Base by Connecting with Local Sporting Clubs
              </h3>
              <p className="text-gray-600 text-sm">
                Discover new clients in your local, statewide, or national
                service area.
              </p>
            </div>
            <div className="flex flex-col items-start text-start">
              <div className="mb-4">
                <svg
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0724 12.749H34.6184C35.073 12.749 35.4565 12.9063 35.7689 13.221C36.0815 13.5356 36.2379 13.9218 36.2379 14.3795C36.2379 14.8375 36.0815 15.218 35.7689 15.521C35.4565 15.8243 35.073 15.976 34.6184 15.976H20.0724C19.6157 15.976 19.2335 15.8215 18.9259 15.5125C18.6185 15.2035 18.4649 14.82 18.4649 14.362C18.4649 13.9043 18.6185 13.521 18.9259 13.212C19.2335 12.9033 19.6157 12.749 20.0724 12.749ZM20.0724 18.976H34.6184C35.073 18.976 35.4565 19.1333 35.7689 19.448C36.0815 19.7626 36.2379 20.1488 36.2379 20.6065C36.2379 21.0645 36.0815 21.4471 35.7689 21.7545C35.4565 22.0615 35.073 22.215 34.6184 22.215H20.0724C19.6157 22.215 19.2335 22.0578 18.9259 21.7435C18.6185 21.4288 18.4649 21.0425 18.4649 20.5845C18.4649 20.1268 18.6185 19.7443 18.9259 19.437C19.2335 19.1296 19.6157 18.976 20.0724 18.976ZM11.6909 44.299C10.1195 44.299 8.78403 43.749 7.68436 42.649C6.58436 41.5493 6.03436 40.2138 6.03436 38.6425V33.201C6.03436 32.7203 6.19803 32.3163 6.52536 31.989C6.8527 31.6616 7.25686 31.498 7.73786 31.498H12.0464V7.10746C12.0464 6.15913 12.379 5.3523 13.0444 4.68696C13.7097 4.02163 14.5165 3.68896 15.4649 3.68896H39.2379C40.1742 3.68896 40.976 4.02163 41.6434 4.68696C42.3107 5.3523 42.6444 6.15913 42.6444 7.10746V20.3925C42.6444 20.8731 42.4799 21.2771 42.1509 21.6045C41.8219 21.9318 41.4157 22.0955 40.9324 22.0955C40.449 22.0955 40.0457 21.9318 39.7224 21.6045C39.3994 21.2771 39.2379 20.8731 39.2379 20.3925V7.10746H15.4649V31.498H23.5704C24.05 31.498 24.4559 31.6625 24.7879 31.9915C25.1195 32.3205 25.2854 32.7266 25.2854 33.21C25.2854 33.6933 25.1195 34.0965 24.7879 34.4195C24.4559 34.7428 24.05 34.9045 23.5704 34.9045H9.44086V38.6365C9.44086 39.2755 9.65753 39.8113 10.0909 40.244C10.5242 40.6763 11.0409 40.8925 11.6409 40.8925H23.5704C24.05 40.8925 24.4559 41.057 24.7879 41.386C25.1195 41.715 25.2854 42.1211 25.2854 42.6045C25.2854 43.0878 25.1195 43.491 24.7879 43.814C24.4559 44.1373 24.05 44.299 23.5704 44.299H11.6909ZM28.2854 42.5955V38.5815C28.2854 38.3721 28.3247 38.1693 28.4034 37.973C28.482 37.777 28.6127 37.586 28.7954 37.4L39.3639 26.8615C39.6845 26.5361 40.0409 26.3013 40.4329 26.157C40.8249 26.0123 41.2189 25.94 41.6149 25.94C42.0309 25.94 42.4344 26.021 42.8254 26.183C43.2164 26.345 43.5694 26.584 43.8844 26.9L45.7344 28.75C46.049 29.066 46.2794 29.418 46.4254 29.806C46.5714 30.1936 46.6444 30.5815 46.6444 30.9695C46.6444 31.3681 46.5634 31.7691 46.4014 32.1725C46.2394 32.5755 45.999 32.9371 45.6804 33.2575L35.1844 43.801C34.9997 43.9836 34.8089 44.1123 34.6119 44.187C34.4152 44.2616 34.2122 44.299 34.0029 44.299H29.9889C29.5079 44.299 29.1037 44.1353 28.7764 43.808C28.449 43.4806 28.2854 43.0765 28.2854 42.5955ZM31.4649 41.1195H33.3649L39.3789 35.058L38.4789 34.107L37.5289 33.2055L31.4649 39.2165V41.1195ZM38.4789 34.1055L37.5289 33.2055L39.3789 35.0555L38.4789 34.1055Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Streamline Your Deal-Making Process with Our Moderated Platform
              </h3>
              <p className="text-gray-600 text-sm">
                Experience efficient negotiations that lead to fruitful
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Screen 5: Handshake/Boy Section
  const PartnershipSection = () => {
    return (
      <section className=" bg-white pt-12">
        <div className="mx-auto">
          <div className="rounded-xl overflow-hidden mb-12 px-24">
            <div className="lg:w-1/2 text-center mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
                Empowering Clubs and <br /> Businesses to Thrive
              </h2>
              <p className="text-black text-lg mb-12">
                Clubs often face fragmented purchasing power, leading to
                inflated costs and missed savings. Our platform bridges this
                gap, allowing clubs to leverage bulk purchasing while businesses
                gain access to targeted opportunities for growth.
              </p>
            </div>
            <img
              src="/src/assets/landingPage/HAND_SHAKE.webp"
              alt="Two people shaking hands, symbolizing a business deal"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="bg-[#DAE2CB] py-12 justify-between flex flex-row items-center text-black">
            <div className="w-1/2 pl-8">
              <h2 className="text-3xl font-normal mb-4">
                Our platform helps you effortlessly find and connect with the
                right partners—whether you're a club looking for suppliers or a
                business seeking new opportunities. Focus on what you do best,
                and let us handle the rest.
              </h2>
              <a href="#herosection">
                <button className="bg-primary/90 text-white font-normal py-3 px-8 rounded-md shadow-lg hover:bg-primary transition duration-300">
                  Get Started for Free
                </button>
              </a>
            </div>
            <div className="w-1/2 flex justify-end relative translate-y-12 overflow-x-hidden overflow-y-hidden">
              {/* Green circle background */}
              <div
                className="absolute"
                style={{
                  width: "720px",
                  height: "720px",
                  background: "#173D35",
                  borderRadius: "50%",
                  right: "-120px",
                  bottom: "-260px",
                  zIndex: 0,
                  filter: "blur(0.5px)",
                }}
                aria-hidden="true"
              />
              <img
                src="/src/assets/landingPage/PLAYER.png"
                alt="A smiling boy with a trophy"
                className="h-auto rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Footer component
  const Footer = () => {
    return (
      <footer className="bg-[#060F0D] text-white py-12 px-4 sm:px-6 relative z-12 lg:px-24">
        <img
          src="/src/assets/logo/SPORTS_CORP_LOGO.webp"
          alt="Sports Corp Logo"
          className="h-12 mb-4"
        />
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-normal mb-4">
              Where Clubs and Businesses <br />
              Connect and Grow.
            </h3>

            <div className="flex sm:flex-row items-center gap-4 mb-6">
              <a href="/club/signup">
                <button className="bg-primary/90 text-white font-normal py-3 px-8 rounded-md hover:bg-primary transition duration-300 w-full sm:w-auto">
                  Register as a Club
                </button>
              </a>
              <a href="/business/signup">
                <button className="bg-[#eebf47]  text-black font-normal py-3 px-8 rounded-md hover:bg-yellow-500 transition duration-300 w-full sm:w-auto">
                  Register as a Business
                </button>
              </a>
            </div>

            <div className="flex space-x-4 mb-6">
              <a href="#" aria-label="Facebook">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.593 7.20301C21.4791 6.78041 21.2565 6.39501 20.9474 6.08518C20.6382 5.77534 20.2533 5.55187 19.831 5.43701C18.265 5.00701 12 5.00001 12 5.00001C12 5.00001 5.73599 4.99301 4.16899 5.40401C3.74692 5.52415 3.36282 5.75078 3.05356 6.06214C2.7443 6.3735 2.52028 6.75913 2.40299 7.18201C1.98999 8.74801 1.98599 11.996 1.98599 11.996C1.98599 11.996 1.98199 15.26 2.39199 16.81C2.62199 17.667 3.29699 18.344 4.15499 18.575C5.73699 19.005 11.985 19.012 11.985 19.012C11.985 19.012 18.25 19.019 19.816 18.609C20.2385 18.4943 20.6237 18.2714 20.9336 17.9622C21.2436 17.653 21.4674 17.2682 21.583 16.846C21.997 15.281 22 12.034 22 12.034C22 12.034 22.02 8.76901 21.593 7.20301ZM9.99599 15.005L10.001 9.00501L15.208 12.01L9.99599 15.005Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <p className="text-sm">© 2025 TSC+. All rights reserved.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog Posts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Community Impact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Community Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Partnerships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    User Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-full border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-end items-center text-sm text-gray-400">
            <div className="space-x-4">
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <HeroSection />
      <UnifiedMarketplace />
      <ValueForClub />
      <BusinessOpportunities />
      <PartnershipSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
