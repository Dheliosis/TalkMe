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
</script>

<template>
  <Header progress1="10" progress2="100" progress3="89" :full="false"></Header>
  <div class="mx-24 my-10 ">
    <div class="flex w-full">

      <div class="w-1/2 h-screen scroll-smooth">
        <Tabs :steps="['profile', 'dashboard', 'settings']">
          <div class="hidden p-4 rounded-lg" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="w-max mb-7">
              <h1 class="text-2xl font-semibold">Informations de votre entreprise</h1>
              <div class="w-1/3 h-1 bg-primary-500 rounded mt-2"></div>
            </div>
            <p class="w-5/6">
              Personnalisez votre module industriel en toute simplicité avec notre formulaire dédié. Nous vous
              accompagnons
              pas
              à
              pas pour une solution sur mesure, adaptée à vos besoins.
            </p>

            <div class="mt-7">
              <h2 class="text-xl font-semibold">Quels type d'entreprise êtes-vous ? (secteur d'activité)</h2>
              <div class="mt-5">
                <RadioCardList :inputs="inputsEntrepriseType" />
              </div>
            </div>
          </div>
          <div class="hidden p-4 rounded-lg" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
            <div class="w-full">
              <h2 class="text-xl font-semibold">Quelle est la taille de votre entreprise ?</h2>
              <div class="mt-5">
                <RadioCardList :inputs="radioInputsEntrepriseSize" />
              </div>
            </div>
          </div>
          <div class="hidden p-4 rounded-lg" id="settings" role="tabpanel" aria-labelledby="settings-tab">
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
                <h2 class="text-xl font-semibold">Quels types de logiciels utilisez-vous ?</h2>
                <div class="mt-5">
                  <CheckBoxCardList :inputs="inputsLogicielType" />
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>

      <div class="w-1/2 flex items-center justify-center fixed right-0 top-20">
        <img src="./public/entreprise.svg" class="w-5/6" />
      </div>
    </div>

  </div>
</template>
