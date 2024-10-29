import React, { useEffect, useRef } from "react";
import "../../../style.css";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  // Ref for the canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef) return;
    // Access the canvas and set up the context
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match footer dimensions
    const footerElement = document.querySelector("footer");
    if (footerElement) {
      canvas.width = footerElement.clientWidth;
      canvas.height = footerElement.clientHeight;
    }

    // Particle system setup
    let particlesArray: any[] = [];

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx?.beginPath();
        ctx?.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx!.fillStyle = "#fff";
        ctx?.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      if (!canvas) return;
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 30000;
      for (let i = 0; i < numberOfParticles * 2; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size * 2;
        let y = Math.random() * (canvas.height - size * 2) + size * 2;
        let directionX = Math.random() * 5 - 2.5;
        let directionY = Math.random() * 5 - 2.5;
        let color = "#56c596";
        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    function connect() {
      if (!canvas) return;
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) ** 2 +
            (particlesArray[a].y - particlesArray[b].y) ** 2;
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx!.strokeStyle = `rgba(237, 215, 88, ${opacityValue})`;
            ctx!.lineWidth = 1;
            ctx?.beginPath();
            ctx?.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx?.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx?.stroke();
          }
        }
      }
    }

    function animate() {
      if (!canvas) return;
      requestAnimationFrame(animate);
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // Resize Event
    const handleResize = () => {
      if (footerElement) {
        canvas.width = footerElement.clientWidth;
        canvas.height = footerElement.clientHeight;
      }
      init();
    };

    window.addEventListener("resize", handleResize);

    // Initialize and animate
    init();
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasRef]);

  return (
    <footer className="relative  text-gray-400 mb-10 bg-[#171A1E] shrink-0 mt-28 sm:mt-20 lg:mt-32 xl:mt-52 responsive-div">
      {/* Canvas for Particle Animation */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-16 sm:gap-8 lg:gap-16 max-w-[90%] mx-auto px-3 py-7 sm:px-6 sm:py-14">
        <div>
          <h2 className="text-white text-4xl md:text-2xl lg:text-6xl font-extrabold mb-4">
            LET'S TALK
          </h2>
          <button
            type="submit"
            className="theme-btn max-w-fit mt-5 p-2 text-xs md:text-[10px] font-bold  xl:text-xs mx-auto"
          >
            <div className="mx-auto ">CLICK TO CONTACT</div>
          </button>
        </div>

        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Quick Link</h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 sm:flex gap-4  mb-4">
            <Link
              to="home"
              className="cursor-pointer hover:text-white text-sm "
              smooth={true}
              duration={500}
              offset={-100}
            >
              HOME
            </Link>
            <Link
              to="skills"
              className="hover:text-white text-sm cursor-pointer"
              smooth={true}
              duration={500}
              offset={-100}
            >
              SKILLS
            </Link>
            <Link
              to="portfolio"
              className="hover:text-white text-sm cursor-pointer"
              smooth={true}
              duration={500}
              offset={-50}
            >
              RESUME
            </Link>
            <Link
              to="contact"
              className="hover:text-white text-sm cursor-pointer"
              smooth={true}
              duration={500}
              offset={-100}
            >
              CONTACT
            </Link>
          </div>
          <form className="flex flex-col pt-3 sm:pt-0">
            <input
              type="email"
              placeholder="Email Address"
              className="py-2 px-4 rounded-md mb-2 bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                I agree to all your terms and policies
              </label>
            </div>
          </form>
        </div>

        <div className="sm:pt-6 xl:pt-0">
          <h3 className="text-white font-bold text-2xl mb-4 mx-auto">
            Address
          </h3>
          <div className="flex flex-col gap-3">
            <p>Bahadurgarh,Haryana</p>
            <p>
              <span className="font-semibold">Email: </span>{" "}
              vishvasgupta2002@gmail.com
            </p>
            <p>
              {" "}
              <span className="font-semibold">Phone-no: </span> (+91) 9416979830
            </p>
          </div>
        </div>
      </div>

      <div className="relative  mt-8 bg-[#1B1E22] pt-4 text-center sm:px-6 sm:py-6">
        <div className="sm:max-w-[90%] mx-auto flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
          <p className="my-auto">
            © 2024 All Rights Reserved{" "}
            <span className="text-red-600">Vishwas</span>
          </p>
          <div className="flex justify-center space-x-2 sm:space-x-6 pb-5 sm:pb-0">
            <a href="#" className="hover:text-white text-xs sm:text-sm">
              Facebook
            </a>
            <a href="#" className="hover:text-white text-xs sm:text-sm">
              Twitter
            </a>
            <a href="#" className="hover:text-white text-xs sm:text-sm">
              Instagram
            </a>
            <a href="#" className="hover:text-white text-xs sm:text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
