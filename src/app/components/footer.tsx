const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center p-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados. Desenvolvido por <span className="font-semibold">Nogueira Tecnologia</span>.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  