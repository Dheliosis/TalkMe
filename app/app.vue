<script setup>
import { onMounted } from 'vue'
import CheckBoxCardList from './components/CheckBoxCardList.vue';
import Button from './components/Button.vue';

import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
})

const inputsEntrepriseType = [
  {
    title: "Agroalimentaire",
  }, {
    title: "Aéronautique",
  }, {
    title: "Automobile",
  }, {
    title: "Électronique",
  }, {
    title: "Métiers du bois ou du papier",
  }, {
    title: "Métiers du pétrole",
  }, {
    title: "Construction",
  }, {
    title: "Métallurgie",
  }, {
    title: "Plasturgie",
  }, {
    title: "Logistique",
  }, {
    title: "Textile",
  }, {
    title: "Pharmaceutique",
  },
]

const inputsLogicielType = [
  {
    title: "Systèmes ERP",
    subtitle: "(Enterprise Resource Planning)"
  },
  {
    title: "Systèmes MES",
    subtitle: "(Manufacturing Execution System)"
  },
  {
    title: "Logiciels de CAO",
    subtitle: "(Conception Assistée par Ordinateur)"
  },
  {
    title: "Logiciels de FAO",
    subtitle: "(Fabrication Assistée par Ordinateur)"
  }, {
    title: "Logiciels de SCM",
    subtitle: "(Supply Chain Management)"
  }, {
    title: "Logiciels PLM",
    subtitle: "(Product Lifecycle Management)"
  }, {
    title: "Autres"
  },
]

const radioInputsEntrepriseSize = [
  {
    title: "PME",
    subtitle: 'Petites et moyennes entreprises',
    chiffre: "(-250 employés)"
  }, {
    title: "ETI",
    subtitle: 'Entreprises de taille intermédiaire',
    chiffre: "(250 à 4 999 employés)"

  }, {
    title: "Grandes entreprises",
    chiffre: "(+ 5 000 employés)"
  },
]

const inputsPb = [
  {
    title: 'Manque de fonctionnalités'
  }, {
    title: 'Complexité d\'utilisation'
  }, {
    title: 'Problèmes de performance'
  }, {
    title: 'Conformité et Sécurité'
  }, {
    title: 'Support et service client'
  }, {
    title: 'Manque de personnalisation'
  }, {
    title: 'Accessibilité'
  }, {
    title: 'Incohérence des données'
  }, {
    title: 'Autres'
  },
]

const inputsProcess = [
  {
    title: 'Gestion des stocks'
  }, {
    title: 'Planification de la production'
  }, {
    title: 'Contrôle qualité'
  }, {
    title: 'Gestion des commandes'
  }, {
    title: 'Maintenance préventive'
  }, {
    title: 'Rapports et analyses'
  }, {
    title: 'Gestion HR'
  }, {
    title: 'Suivi des expéditions'
  }, {
    title: 'Gestion des fournisseurs'
  }, {
    title: 'Sécurité et conformité'
  }, {
    title: 'Autres'
  }
]

const inputsFonction = [
  {
    title: 'Tableaux de bord intuitifs'
  }, {
    title: 'Gestion des rémunérations'
  }, {
    title: 'Gestion des absences'
  }, {
    title: 'Gestion des congés'
  }, {
    title: 'Autres'
  },
]

const inputsIso = [
  {
    title: 'ISO 1401'
  }, {
    title: 'ISO 9001'
  }, {
    title: 'Autres'
  }, {
    title: 'Non / Je ne sais pas'
  },
]

</script>

<template>
  <Header progress1="100" progress2="0" progress3="0" />
  <div class="mx-24 my-14 font-Poppins">
    <div class="flex w-full">

      <div class="lg:w-1/2 w-full h-screen scroll-smooth">
        <section id="entrepriseType">
          <div class="w-max mb-7">
            <h1 class="text-2xl font-semibold">Informations de votre entreprise</h1>
            <div class="w-1/3 h-1 bg-primary-500 rounded mt-2"></div>
          </div>
          <p class="w-5/6">
            Personnalisez votre module industriel en toute simplicité avec notre formulaire dédié. Nous vous accompagnons
            pas
            à
            pas pour une solution sur mesure, adaptée à vos besoins.
          </p>

          <div class="mt-7">
            <h2 class="text-xl font-semibold">Quels type d'entreprise êtes-vous&nbsp;? (secteur d'activité)</h2>
            <div class="mt-5">
              <RadioCardList :inputs="inputsEntrepriseType" />
            </div>
            <div class="h-max flex mt-4 justify-end w-11/12">
              <a href="#entrepriseSize">
                <Button action="Suivant" />
              </a>
            </div>
          </div>

        </section>
        <section id="entrepriseSize" class="mt-24 h-screen flex items-center w-full">
          <div class="w-full">
            <h2 class="text-xl font-semibold">Quelle est la taille de votre entreprise&nbsp;?</h2>
            <div class="mt-5">
              <RadioCardList :inputs="radioInputsEntrepriseSize" />
            </div>
            <div class="h-max flex mt-4 justify-end w-11/12">
              <a href="#tools">
                <Button action="Suivant" />
              </a>
            </div>

          </div>
        </section>
        <section id="tools" class="mt-24 h-screen flex items-center">
          <div>
            <div class="w-max mb-10">
              <h1 class="text-2xl font-semibold">Vos outils actuels</h1>
              <div class="w-2/3 h-1 bg-primary-500 rounded mt-2"></div>
            </div>
            <p class="w-5/6">
              Les logiciels peuvent entraver la productivité industrielle. Transformer ces frustrations en solutions
              fluides
              est essentiel pour une performance optimale.
            </p>

            <div class="mt-10">
              <h2 class="text-xl font-semibold">Quels types de logiciels utilisez-vous&nbsp;?</h2>
              <div class="mt-5">
                <CheckBoxCardList :inputs="inputsLogicielType" />
              </div>
              <div class="h-max flex mt-4 justify-end w-11/12">
                <a href="#problems">
                  <Button action="Suivant" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="problems" class="mt-24 h-screen flex items-center">
          <div class="">
            <h2 class="text-xl font-semibold">Quelles difficultés rencontrez-vous en utilisant vos logiciels
              actuels&nbsp;?
            </h2>
            <div class="mt-5">
              <CheckBoxCardList :inputs="inputsPb" />
            </div>
            <div class="h-max flex mt-4 justify-end w-11/12">
              <a href="#process">
                <Button action="Suivant" />
              </a>
            </div>
          </div>
        </section>
        <section id="process" class="mt-24 h-screen flex items-center">
          <div class="">
            <h2 class="text-xl font-semibold">Quel processus souhaitez vous optimiser dans votre entreprise&nbsp;?
            </h2>
            <div class="mt-5">
              <CheckBoxCardList :inputs="inputsProcess" />
            </div>
            <div class="h-max flex mt-4 justify-end w-11/12">
              <a href="#function">
                <Button action="Suivant" />
              </a>
            </div>
          </div>
        </section>
        <section id="function" class="mt-24 h-screen flex items-center">
          <div class="">
            <h2 class="text-xl font-semibold">Quelles fonctionnalités souhaitez-vous améliorer/implémenter dans vos
              outils&nbsp;?
            </h2>
            <div class="mt-5">
              <CheckBoxCardList :inputs="inputsFonction" />
            </div>
            <div class="h-max flex mt-4 justify-end w-11/12">
              <a href="#iso">
                <Button action="Suivant" />
              </a>
            </div>
          </div>
        </section>
        <section id="iso" class="mt-24 h-screen flex items-center">
          <div class="">
            <h2 class="text-xl font-semibold">Respectez-vous des normes ISO&nbsp;?
            </h2>
            <div class="mt-5">
              <CheckBoxCardList :inputs="inputsIso" />
            </div>
            <div class="h-max flex mt-4 justify-end w-11/12">
              <a href="">
                <Button action="Finir ma configuration" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <div class="lg:w-1/2 lg:flex hidden items-center justify-center fixed right-0 top-20 bottom-20">
        <img src="./public/entreprise.svg" class="w-5/6" />
      </div>
    </div>

  </div>
</template>
