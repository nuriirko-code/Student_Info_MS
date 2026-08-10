function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center text-white p-8 bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')]">
      <div className="max-w-[600px]">
       <h1  className="text-5xl font-bold mb-2 [text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
        Welcome to SIMS
        </h1>
         
        <p className="text-xl mb-4 [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]">
          Student Information Management System
        </p>
       
       
        <a href="#about" className="inline-block bg-white text-slate-800 py-2 px-6 rounded transition-colors hover:bg-blue-500 hover:text-white">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;