import React from 'react'
import image from "./image.PNG"
import { motion } from "framer-motion"
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"

function Services() {
  return (
 <div>
    {/* <section className=' bg-sky-500 pt-20 pb-20 flex justify-center gap-20  '>
          <div>
                <h1 className='w-150 text-6xl font-bold  '>Nos Services Marketing Digital au Maroc</h1>

          </div>

          <div>
                 <p className='w-130 pt-30 font-semibold text-white '>De la stratégie à l’exécution, de la visibilité à la conversion — Hooked Digital
                   est votre partenaire 360° pour dominer le digital au Maroc.
                   SEO, publicité, web, social media, branding, data.</p>

          </div>


    </section> */}


   

    
    <div className="relative overflow-hidden min-h-screen bg-white">
       

      {/* Daira safra fo9 */}
      <motion.div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-sky-500 rounded-full opacity-70" animate={{ y: [0, -40, 0], x: [0, 20, 0]}} transition={{ repeat: Infinity, duration: 6 }} ></motion.div>

      {/* Daira rose */}
      <motion.div className="absolute top-20 right-10 w-[450px] h-[450px] bg-violet-300 rounded-full" animate={{ y: [0, -40, 0], x: [0, 20, 0]}} transition={{ repeat: Infinity, duration: 6 }} ></motion.div>

      {/* Daira violette */}
      <motion.div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-violet-600 rounded-full opacity-60" animate={{ y: [0, -40, 0], x: [0, 20, 0]}} transition={{ repeat: Infinity, duration: 6 }} ></motion.div>

      {/* Dwira khadra sghira */}
      <motion.div className="absolute top-52 left-[55%] w-16 h-16 bg-sky-400 rounded-full" animate={{ y: [0, -40, 0], x: [0, 20, 0]}} transition={{ repeat: Infinity, duration: 6 }} ></motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-20 py-32">
        
        <div className="max-w-l">
          <motion.p className="text-gray-600 mb-4 text-xl font-semibold" initial={{ y: -150, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{
             duration: 1,
             delay: 0.3,
            }}>
            Bienvenue
          </motion.p>

          <motion.h1 className="text-8xl font-bold leading-tight pt- pb-10 bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}transition={{duration: 1.2,ease: "easeOut", }} >
           Nos Services Marketing Digital au Maroc
          </motion.h1>
          

          <button className="mt-10 bg-violet-400 text-white hover:bg-violet-600 transition  text-xl font-semibold  px-8 py-4 rounded-2xl ">
            Demandez votre projet
          </button>
        </div>

        <img
          src={image}
          alt=""
          className="w-[700px]"
        />
      </div>
    </div>

   <section>

      <div className='flex-col justify-items-center pt-10 text-center pb-20 '>
        <h2 className='text-5xl font-bold'>Un Écosystème Digital Complet et Synchronisé</h2>
        <p className='w-110 pt-6 font-semibold text-gray-600'>Chaque service est puissant seul. 
          Ensemble, ils créent un système de croissance où chaque canal renforce les autres.</p>
        
      </div>   
    
    

      {/* section des boxs */}

       <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		{/* <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={image1} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  " />
			<div className="p-6 space-y-2 lg:col-span-5 pt-1">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Création Site Web</h3>
				
				<p className='pt-3'>Création de sites vitrines modernes, boutiques e-commerce performantes sous Shopify et WooCommerce, développement WordPress sur mesure et refontes complètes pour moderniser votre présence digitale.
           Nous concevons des interfaces premium, rapides et 100% responsive avec une approche mobile-first, une optimisation SEO intégrée et une expérience utilisateur pensée pour maximiser la conversion et renforcer votre image de marque.</p>
             <div className='flex gap-4 pt-2'>
           <p className='rounded-4xl bg-violet-400 text-white p-2 w-30 flex justify-center'>WordPress</p>
            <p className='rounded-4xl bg-violet-400 text-white p-2 w-35 flex justify-center'>WooCommerce</p>
            </div>
              <div  className='flex gap-4 pt-1'>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-30 flex justify-center'>Site Vitrine</p>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-25 flex justify-center'>Shopify</p>
                </div> 

			</div>
		</a> */}
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img  className="object-cover w-full rounded h-55 " src={image2} alt="" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Campagnes Social Media</h3>
					
					<p>Conception et gestion de campagnes publicitaires sur les réseaux sociaux (Facebook, Instagram, TikTok, LinkedIn) pour accroître votre visibilité et toucher une audience qualifiée. 
            Stratégies ciblées, contenus engageants et publicités optimisées pour augmenter vos conversions.</p>
            <div className='flex gap-4 pt-2'>
           <p className='rounded-4xl bg-violet-400 text-white p-2 w-30 flex justify-center'>Google Ads</p>
           <p className='rounded-4xl bg-violet-400 text-white p-2 w-30 flex justify-center'>Facebook Ads</p>
            </div>
             <div  className='flex gap-4 pt-1'>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-35 flex justify-center'>Instagram Ads</p>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-25 flex justify-center'>TikTok</p>
                </div>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img  className="object-cover w-full rounded h-55 " src={image3} alt="" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">SEO & Référencement</h3>
					
					<p>Optimisation SEO complète pour améliorer la visibilité de votre site sur les moteurs de recherche. Nous travaillons le contenu, les mots-clés et la structure technique afin d’augmenter votre positionnement sur Google, 
            attirer un trafic qualifié et générer des résultats durables.</p>
            <div  className='flex gap-4 pt-6'>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-35 flex justify-center'>SEO Technique</p>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-25 flex justify-center'>SEO Local</p>
             </div>
                <div  className='flex gap-4 pt-1'>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-30 flex justify-center'>Audit SEO</p>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-20 flex justify-center'>GEO</p>
                </div>

				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img  className="object-cover w-full rounded h-55 dark:bg-gray-500" src={image4} alt="" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Identité Visuelle</h3>
					
					<p>Création d’une identité visuelle unique et cohérente qui reflète parfaitement votre marque et vos valeurs.Nous concevons des logos modernes, des chartes graphiques complètes, des palettes de couleurs et des éléments visuels harmonisés afin de renforcer votre image de marque, 
            améliorer votre reconnaissance.</p>
             <div  className='flex gap-4 pt-1'>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-30 flex justify-center'>Typography</p>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-20 flex justify-center'>Logo</p>
                </div>
                <div  className='flex gap-4 pt-1'>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-30 flex justify-center'>Style Guide</p>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-20 flex justify-center'>Colors</p>
                </div>

				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-600">January 24, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-600">January 25, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-600">January 26, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>

		</div>
    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-1  mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
			<img src={image1} alt="" className="object-cover w-150 h-64 rounded sm:h-96 lg:col-span-7  " />
			<div className=" space-y-2 lg:col-span-5 pt-1   ">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Création Site Web</h3>
				
				<p className='pt-3 w-118'>Création de sites vitrines modernes, boutiques e-commerce performantes sous Shopify et WooCommerce, développement WordPress sur mesure et refontes complètes pour moderniser votre présence digitale.
           Nous concevons des interfaces premium, rapides et 100% responsive avec une approche mobile-first, une optimisation SEO intégrée et une expérience utilisateur pensée pour maximiser la conversion et renforcer votre image de marque.</p>
             <div className='flex gap-4 pt-2'>
           <p className='rounded-4xl bg-violet-400 text-white p-2 w-30 flex justify-center'>WordPress</p>
            <p className='rounded-4xl bg-violet-400 text-white p-2 w-35 flex justify-center'>WooCommerce</p>
            </div>
              <div  className='flex gap-4 pt-1'>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-30 flex justify-center'>Site Vitrine</p>
                <p className='rounded-4xl bg-violet-400 text-white p-2 w-25 flex justify-center'>Shopify</p>
                </div> 

			</div>
		</a>
		
	</div>
</section> 

     
  












 </section>






</div>
  )
}

export default Services
