import { useEffect } from "react";

const ConsoleEasterEgg = () => {
  useEffect(() => {
    console.log(
      "%c\n██╗     ██████╗     ███████╗ ██████╗ ██╗     \n██║     ██╔══██╗    ██╔════╝██╔═══██╗██║     \n██║     ██████╔╝    ███████╗██║   ██║██║     \n██║     ██╔══██╗    ╚════██║██║   ██║██║     \n███████╗██║  ██║    ███████║╚██████╔╝███████╗\n╚══════╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚══════╝\n",
      "color: #3ab0e0; font-family: monospace;"
    );
    console.log(
      "%c👀 Mirando el código? Nos gusta tu estilo.",
      "color: #3dba84; font-size: 14px; font-weight: bold;"
    );
    console.log(
      "%c📩 lrsolutionspartners@gmail.com",
      "color: #888; font-size: 12px;"
    );
    console.log(
      "%c🚀 Siempre buscamos talento. Hablemos.",
      "color: #888; font-size: 12px;"
    );
  }, []);

  return null;
};

export default ConsoleEasterEgg;
