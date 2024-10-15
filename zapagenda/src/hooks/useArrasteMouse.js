import { useRef, useEffect } from "react";

export default function useArrasteMouse(referencias) {
  const estaArrastando = useRef(false);
  const ignorarProximoClique = useRef(false);

  // Função para habilitar o arraste
  function habilitarArrasteScroll(elemento) {
    let clicado = false;
    let inicioX;
    let scrollInicial;

    const manipuladorMouseDown = (e) => {
      clicado = true;
      elemento.classList.add("active");
      inicioX = e.pageX - elemento.offsetLeft;
      scrollInicial = elemento.scrollLeft;
      estaArrastando.current = false;
    };

    const manipuladorMouseMove = (e) => {
      if (!clicado) return;
      e.preventDefault();
      estaArrastando.current = true; // Agora estamos arrastando
      const x = e.pageX - elemento.offsetLeft;
      const deslocamento = (x - inicioX) * 2; // Velocidade do scroll
      elemento.scrollLeft = scrollInicial - deslocamento;
    };

    const manipuladorMouseUp = () => {
      clicado = false;
      elemento.classList.remove("active");
      if (estaArrastando.current) {
        ignorarProximoClique.current = true; // Ignorar o próximo clique
      }
      estaArrastando.current = false;
    };

    const manipuladorMouseLeave = () => {
      clicado = false;
      elemento.classList.remove("active");
      if (estaArrastando.current) {
        ignorarProximoClique.current = true;
      }
      estaArrastando.current = false;
    };

    elemento.addEventListener("mousedown", manipuladorMouseDown);
    elemento.addEventListener("mousemove", manipuladorMouseMove);
    elemento.addEventListener("mouseup", manipuladorMouseUp);
    elemento.addEventListener("mouseleave", manipuladorMouseLeave);

    return () => {
      elemento.removeEventListener("mousedown", manipuladorMouseDown);
      elemento.removeEventListener("mousemove", manipuladorMouseMove);
      elemento.removeEventListener("mouseup", manipuladorMouseUp);
      elemento.removeEventListener("mouseleave", manipuladorMouseLeave);
    };
  }

  useEffect(() => {
    const funcoesDeLimpeza = referencias.current.map((elemento) => {
      if (elemento && elemento.scrollWidth > elemento.clientWidth) {
        elemento.classList.add("overflow");
        return habilitarArrasteScroll(elemento);
      } else if (elemento) {
        elemento.classList.remove("overflow");
      }
      return null;
    });

    return () => {
      funcoesDeLimpeza.forEach((limpar) => {
        if (limpar) limpar();
      });
    };
  }, [referencias]);

  return { estaArrastando, ignorarProximoClique };
}
