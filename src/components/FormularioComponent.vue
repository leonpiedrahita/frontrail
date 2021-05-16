<template>
  <div id="body">
    <div class="paddingfilas">
      <div class="gridencabezado titulo principal negrita">
        <div><img class="miimagen" /></div>
        <div class="nombrereporte">Reporte de asistencia técnica</div>
        <div class="gridparejas">
          <div>N°</div>
          <div class="dato">
            {{ informacion.nombre }}
          </div>
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Detalles de la asistencia</div>
      </div>
      <div class="grid principal" fluid>
        <div class="gridparejas">
          <div class="subtitulonegrita">Tipo de asistencia :</div>
          <div class="dato">Mantenimiento preventivo.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Duración :</div>
          <div class="dato">5 horas</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Fecha de inicio :</div>
          <div class="dato">01-01-2021</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Fecha de finalización :</div>
          <div class="dato">01-01-2021</div>
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Información del Cliente</div>
      </div>
      <div class="grid principal" fluid>
        <div class="gridparejas">
          <div class="subtitulonegrita">Nombre/Razón social :</div>
          <div class="dato">Lorem, ipsum dolor.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">NIT :</div>
          <div class="dato">123456789</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Sede :</div>
          <div class="dato">Lorem.</div>
        </div>

        <div class="gridparejas">
          <div class="subtitulonegrita">Dirección :</div>
          <div class="dato">Lorem ipsum dolor sit.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Nombre del Profesional :</div>
          <div class="dato">Lorem ipsum dolor sit.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Teléfono :</div>
          <div class="dato">123456789</div>
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Información del Equipo Biomédico</div>
      </div>
      <div class="grid principal" fluid>
        <div class="gridparejas">
          <div class="subtitulonegrita">Nombre :</div>
          <div class="dato">Lorem, ipsum dolor.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Número de serie :</div>
          <div class="dato">123456789</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Marca :</div>
          <div class="dato">Lorem.</div>
        </div>

        <div class="gridparejas">
          <div class="subtitulonegrita">Propietario :</div>
          <div class="dato">Lorem ipsum dolor sit.</div>
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Hallazgos</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Actividades realizadas</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Pruebas de aceptación</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Repuestos utilizados</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Observaciones</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
      <div class="grid principal" fluid>
        <div class="gridfirma">
          <div class="lafirma">
            <img :src="informacion.firma" style="max-width: 50%" />
          </div>
          <div class="nombrefirma">123456789</div>
        </div>
        <div class="gridfirma">
          <div class="lafirma">
            <img
              :src="informacion.firma"
              style="max-width: 50%"
              class="imagenfirma"
            />
          </div>
          <div class="nombrefirma">123456789</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioComponent",
  components: {},
  data: () => ({
    informacion: {
      nombre: null,
      otracosa: "",
      firma:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe4AAADCCAYAAACPDiGvAAAgAElEQVR4Xu2dC7B/a1nXv0qNiAJBSFyik4UHEwSRg6RiRBcaUYYcAgMxsknTY85Jy6KpkdKmizigzhxmUItoVBjQThLHLB1PCsplPBGiyDGYE4hAYVDKxSaT5hPrgee/WL+919q/dXkv33dmz2/v317rvXzfy/d9nvd5nveT5GQEjMDaCDxR0mdI+sOSfp+kz0ufa5fl/IxAqQi8V9LdJH2apNsl3VXSnZLuI+l9kv6RpNeUWvmS6/VJJVfOdTMChSPwJyV9RBKfEDSfkPRa6X9J+s8ps/8p6b9K4pP0u5LeJumDQ/n8b0liUf3QzBdo32Mk/aakd4/e4X/8RL3yJ78/UNKvD++AEYnvv0DSr0n68Mw6xHuUBS58kpa2e0Fxhz2aMWUDGCnafFjFJgpmXDAW2bAuTS+X9AJJ/3Hpiz0/b+Luuffd9jkIsFA+TNIfHUgZYg4Jes77+ZmfSUSTyebekl43kBvft0hES7Hy8/UhwAaDn8dJuknSvRY04R9K+gcLnu/6URN3192/auND+pzK9P2SPjn9455XLJl8kPiQ1kKqy1lBsiGd5DJQ1SGV5jRFviEN8lz+fW513ziQ7n+RBEl/YPjbRDwXQT/XCgLMny8bVOWozN8l6enDnPj9kr5woqEm75m9b+KeCVSnj8X5LOrgILr4DkiuKnnWCmeorlHTxuYhfs8q7Vrb53obgb0QgNhvlPTUUYE3S/rre1Wi1nJM3LX23Db1Rlq9TtKfl/SnJX3uNsUUmysSc0jyceaGtPzbkl5rFXax/eaK1YvA8yR986j6n+m5dnGHmrjrHfDn1Dyk5kcka2ek52wEM5X/1BltSJw8P1ZhBwn+oZGqPJ6NT+pzmTqZZ1B/c2621EDnlBHW2NjrHEz9rhEwAssRQPL+KUl3Sa+ypjxyeVb9vGHi7qOvmRyQdFg9X0bQb5f0byT9qqRbJfG3kxEwAkZgCwS+ezBmy3kjhfO90wQCJu42h8XDhx0rKu9wVTrVUkgZaRfVMDtdfi6TfttEza0yAkbgCARC4zY2WrXK/ERvmLiPGKbnlRnn0GH1HJ9zDMVQdQdBQ842qDqvL/y2ETAC6yDAOnbbKCu0fl+xTvZt5WLiLqs/sxU3NRuT8lIXJYytGPyQtQMclNXXro0RMALXIsBa9eQRKI/32vWJw8TEffzUgYwJWPBnJD12YXWQoLOBVRiK/V9Jbzrh67ywCD9uBIyAEdgFgSmV+Ysl/eVdSq+oEBP3fp3FoMRALKILQdiXSdA55GVIzHw6utZ+/eaSjIAR2A8B7HJuGRWHJ8lUwKX9alVYSTUSN2T394cQlMRpDjeCHCs5DKyQSPn9UZIgwbfugD/EDEFHaEz+vix+NXWDkP+DpFdL+sUd6ukijIARMAIlIsBaiBYy0k9I+tISK3pUnWok7qlzkKX44eb0ByW9Q9JbRhc3zM0rVNTceHO/QXq+zII75x2bijiDnluunzMCRsAItIzA2FCNkKlP81n3x7u8RuJGIv3iSkZtuFqFapudJIRva+5KOtDVNAJG4BAEfkvSp6eSHcc8gVEjcbMb4yo47nQtKYW6G1IOlyufy5TUQ66LETACtSDATWHPGVX2s3Y67iweoxqJG1C/TtILJ9D975K+U9LdJT3rkhCe3EP8O5LuMbOXQnrOErPjWM8Ez48ZASNgBBYiMCbv50v6loV5NPl4rcRNZ3CrzMtO9MpYrYJxGglCRwVz+8R7pwKY5FjcTQ4CN8oIGAEjUCACGPbemer1y5IeVmA9d69SzcQNWNdL+nuS/tIEcnQy18M58Mjuw8oFGgEjYARWQeBFIz9uNK1fv0rOFWdSO3EH9I+W9PqZ0nfF3eWqGwEjYAS6QgA3sB9PLf7AoDntCoRxY1shbto1Fes22su1cTdJenPXvd1v43Po2I8MMJy6GhT3Pq4hxV5iyv8eu4b3DP/DlRB3PlJcedovym65EdgGgQ9LYl5G6v7ykZaIOzo1FuapIWSXgm0mVkm5cnxC+NgHDzekYdcQNg5b1zMMF8cBgLYu1/kbgZYRGMfu4OKR2DC33O6TbWuRuGnsL0l66IlWY5WIdaJT/QhgvEKEpYhS98dHO/MSWgiZY2fBQoNU7itTS+gV16EmBMbW5d8j6W/U1IC169oqcYMTPoB0+FR6kKR3rg2m89scgbiQBaI+FaXuVyT9t+GSlfcNVwUyzv+IpMdI4v/hX8/n2Nf+cyR9vqTfkESoxZzi9jbUdtSB8zbiCeTwjJeBgDT+LyX9mEn8Mqj8fyPw/xEYH4Myhx7ZMzYtE3f0KzfLfNOwGMd3diuoY9QjUXPNHxcPTF3IkoPeMJlDRX1E64LUw62Q+vL7PS+oDPV9haQfdXz6I7rMZVaEABvsPJe6vnikB+JmbE75fGOw9mcrGri9VBWSRoLlE+LOCVVzRKWL8LGl40IbgsRp03UnKowKPeLWI407GQEj8HEExufcXzNorrrEqBfipnO/UNLPp17+4CgWbpcDoIBGh1QNuUFsOb0xnQ+34o8fRE57MaJ74Ik+YKHiBxJ36NwCBqqrcCgCaE7x6Y7U9Tl3T8RNhxNpDembRPS0Gw4div0WjgqZkLRfKen+CYZQfYfk2YMhF0QeRwGQ+Vi1DmmDBx4RPeDR76xwyy9CgKOo96cHuj7n7o24b5R0c+r8+0riyjin7RE4pQLnitV/lyTr7WtSdglB4lNqdYzaXuxogGV3oGu3GQJjdXlv/PUxYHtr+L0Ha+MHDAg83ovgZpOMjCGfMC7LAU9QgUNCTERLkae7APxwexlbrYOdJfBNh64zLxCBsbocy/Iur0jujbgZizlAi4l7/dl5iqw5qw1/ZpP1MtxRp+PayPFCTj8i6Ttskb4MTD9dLQLjS0e6Xb97I+7sD4iPL/e78ul0HgLgCqlA2lmyhqzDyMoGVudhzNunCBypHGMdJyPQOgJvSjeEPVPSD7Xe4Kn29Ubc3zv4dIPFKyU9qcdOX6nNkAhkjfoqu23hshVqcJP1SmCPsgHv75L0lPQ9G6Rv9tHDNoA712IQeLWkLx5q888l/dViarZjRXoj7ldJeuyALzs1dmxOyxCAqOPcOt58u6Tv9pn1MiBXeBrrfDZJjxjyYqNEP3D+7WQEWkTg29L4fomkZ7TYyMva1BtxvyHd+IR0wiLndDkCU9I1rltIeRBHKz7WlyNR3hMcTTCO8/k3/cH47tJwp7wuco1WRCCfc2Mrw01h3aXeiPsX0k1Rny3pju56fFmDObOOs+t4MyzCIWyrwpfhueXT2BmwkQo/cPoG8qafnIxASwhA2BGBsMsrPnsj7mxR3lvb505cJDjIGnVrkEBI10h2luLmIrn/c/QdRM1RRqSuQ0Pu3wUucQcEWIduGsrpUnPaG3mZuE/PqrAM5ww7Erds/dOBDCxd77AirVTE+BpEDNm+daW8nY0ROBoBNIG3DJXAc2UcKvno+m1efk/E/RBJbxkQfY2kL9oc3fILCOkad6JsGU50Lp9dl99/F9VwHKyC/kQ68Qas7n517T/qchrhTxnP3BTWVeqJuB8liTNu0vdJ+mtd9fS1jcUaGVVTlq7DMtxn1+0MDIj6eak5LHJs0tiYORmBmhHI4U+/YrDvqLk9i+reE3FnCeTlkp62CKk2HgYDCBvijoSqKfyu22ilW5ERQI1I/+bLS1j0OPu29O2xUisCeT1nI5qFkFrbNLvePRH38wdpA3AwbkAa6SUxqJ+T1OEYm7GYg4PDj7Y/CqZcxiBtQkba2LD9/m+xhePbwjjqQ2vYReqJuB8j6bVDr/ZiaYtaFAk7zq8Z2BguIXFZ2upiil/TSDZwbNbsMtZf37fY4v8kiYtGSAgm395iI6fa1BNx5zjluDpBYC0mdqJxfj0mbPv0ttjjy9rEmGDjFtHWeNuxzpdh6KfLQACPl78zVKWrYCw9EXc2Tmv1VhkWYHaecdFHSNgm7DIWmpJqwZjI0db4G02UkxGoBQHWOQg7NEitruuf0B89EXeWuFvr4PEZtgm7lqXn2HraZexY/F36+QjkmAXd+HT3Stw3SLr9/DFzaA7sNomQxXWOseM0YR/aJVUWPiZv4pzjXmMbiCq7s7tKj+/oxqe7+bHbK3HX3O44w0YtHipxIpw923Gpu1u01mrwOM45luaQtz0O1kLY+WyJQPbp7iIEas0EtnQgZFV5jYHp2Vlyfo1frs+wl/a+n78MgbHR2m8OQYpeetmL/r8ROBiBrDVi0xmW5gdXa7vieyJugo5wrSepJuIOws4BBvDDxq2Hn+bVQtsNf+c8QmDqkpLW7EHc6e0hMPbpbn7M9kTcWeKuod0m7PYWmFpa9LckPXeoLBtDNrreINbSe33WM6vLmzdSq4HA1hqGtRD3FGGDAWH9ONf2ArrWiHA+FyHAWCPaIKkL9aOHQ9UIjI0sny6p2WOenog7XwVXartxbSB4SpxhM5PYPbKI2lCo6nWlyspnX2+szVFBOhmBEhEYq8t/UNJXl1jRNepUKoGt0bZxHuHvV2KEHTYVSDf5ak1cu9hFsmA6GYGjEEDajihrDtJyVC+43DkIvF7So4cH3yvpvnNeqvGZHon7ZyShNi8hQdQQdr4IHsMzNhkYnjkZgaMRQJKBvK8bKmLyPrpHXP4pBG6UdHP650MlvblFuHoi7lD7lULcVou3OKPabNM4tKTJu81+rr1V2Y6JtnyjpBfU3qip+vdE3KicHzdEGuPM+KiElH3L6E5spGzU4lhGOhmBEhHAnZI5FFH6TN4l9pLrdIek6wcYmrXL6Im446zuqJvBIuLZ+FYyQpbyna3FveiUjsCYvLuIUlV6p7h+1yDwQUl3G755RzriaQqmnoj7I0PPHeGczxk2Uc9Y+CK9cTjbtrV4U1Oq+caMyZvQqNYUNd/t1TSQOyg+P9W2SY5rslETQyy7CuxJ3JT7r0duNDY+q2YNcEVPIJDPEtEUEWLSG1APlxIQyPEHqE+TG8teiPuI4CvjAcQgwiebs2yrxUuY4q7DOQjkgBfNniWeA5DfPQSBHNqaCnAUeaRN0yYg9ELc4cONb3T2ld4C1CmfbMr5Wkk/sEWBztMIHIRADtDyHZK+7aB6uFgjkBGIY1G+K8WLaNUe6oW48YkmItmWnciG4EUTPuJsFiBzjOOcjEBLCHAU9POS/tjQqCbVki11WCdtCQ+iaG5zPNdcg04MzOjIrSzKIWZIO4cqpSo2QOtkpei4mU+UdGtqP5tkrM2djMBRCISGNcq/V2vHk70QN2fK+J9+jSTUe2sliBrCzpHPIm+7ea2FsvMpHQFsSLAsDx9vfkf6djICRyCQ76Wg/D0Nkndpbw/EvZVF+VQgFToNq3GMIdbcIOwyGFyIETgDAeYZmq2Ia26DtTPA9KtnITC+cKS5CGo9EPeXS/q3wzBYS2WC5eJtE6pxn2efNd/8cuUIjMnb14FW3qEVV59LRu4z1P9nh6iZFTfn2qr3QNzhlvVzkh67Qs+hFiRk6dR5Nv+zq9cKIDuLahEYk7dDo1bblVVX/KdT/IyflPSEqlszqnwPxB0uK2v4842D2Aec9s9uaVa4LeciYPI+F0G/fy4C2UBtS2+ic+t5pfd7IO6IUX6uq8op0l5jQ3ClzvNLRqBgBMbkvZVHR8EQuGoHImDiPhD8NYoOZ/zPPCMsI+r275J0l1GFfMnCGj3kPFpFYHwd6NpeHa3i5nadj0CO7MfxJfZNzaTWJe6Qks+JmJajQ+WO9yI0PQ2wtmfBzjYATBz+jvP/WNDju/h7a/sAjAopK0dW2mIy31/Su0c4LI3Ydz9JDxtcrD53opLEBo/44HeVdA9JGOG8dvieGAJb4zkHu3wpCfVB84XFuZMR2BKBsYZ0LcPkLes8O+/WiTsM0ziDnvK1vgioUz7a75P0lEYWH9oY7jtgwd/5BjP+DiIOrKaIefaAu8KDQU4s+pmIHizprSmE7VJivEJVqnuFYyI2noz/Iy8ByX619CF+tY4kWN1wqqrCY5ewpny5WyfukJaXSsenfLQxckAFc+QimGdPEG1IkNQ7CCz+h+T2nkTAY2v4Umcj/vAXLe5j4r6u1IYUUi/mAufMR43dserSknchA6PhakTgLZp4ro1TUTC1TtxhmMa1g3N3+BAbPtpZ8qTTlpL/VToa0g0CQtUzJQWHuvey/ENVGsQ9fj6kVz7nLOY8M5Z6p+qQ1eKRN+2K78kn/833/B35X9auc/4ffbr15iVjHhuppRoB1N/4oTIWfz01OmtFYizw3b0lfVjS9ZcAREhSCPwINXombzZmz5T0ynM61O8agQsQyDHLmzKObJm4Q1XCArFkoR6faUOALDhzif+imRTEHJJxLLxZUp56H0k/Uj7bZPHN9eL3IxZkrx5lIcB4Z+PHD2M3QpHmWh5F4OOzxyWb6rJQdm1KR4AY+sTSJ/0zSc8uvcJz69cycce52pLz7fGiAmGSzxIyhIxZKIOUyfOUlBzq4EzAYbhjEp47iv3cRQhA4th68DMm8NdIesZMjcuaKOdohox31JhL5tiadXFe7SLwE5L+3NC8lwxjvYnWtkzcS8+3WeDekM6Ip5z2Q2IOIp4jMWPRzqLExQtB0GNJuYnB5EYUjUAQ+HNGtYQ4v1rSO3eufRiOUmxTasydcXRxpxGI65x54kcl/YVWwGqZuFEpc148138bYn3y0LFIwpAyRI3hF878Y4vrPAbiPDmkZBbDrNJuZby4HfUjwDh+haQvGTXloZLevHPz8hlkU1a/O+Po4qYRyBrUpuLmt0rckC7SM4Q6NjKb6uLxNXA8Q5D6z0gPv03SAyW9bjhXZiDEjyeOEagNgfGdxS+X9LSdG5EDtKCFYpNtlfnOndBwcWOXsGZ8uVsl7lCRzI1sNkXceTyzyKE6d+CIhmd5h00bk/cRUm+2NPc93h0Owo2bHJpXijlifG/SvFaJ+12SiF41V00OuJA3qnGkaFQsoeo2WW8y9JxpIQjcLOnGoS7Pl/QtB9Qrn0XO3WwfUE0XWSEC+TimmbHVInFDvndK+oCku1c40FxlI7A3AviJP2Ao9Ig1YXwhiV3E9h4B7ZaXtUovHtwjq2/tEZN0a9DCWrWZTtoaMOffPQIvk/TUAYWjpJLQduGyhrYL8vZ5d/dD82wAsoEa4wotbPWpReIO6/A9Ip1VPwDcACMwHA0RoY2EapGzwCNStjU5sh5HtN1lbodAvlSIuxl+cbui9sm5ReKO+LRLzrf3QdulGIFyEcAD4+FD9Y404snn3fbvLne81FSzNw037VHnJiKotUbca1zjWdOAdF2NwFoIoCpHZU7625Keu1bGC/PJ591swlGZz4mlv7AYP94RAjmMdRNHqK0Rd+zWm+icjiaWm1oGAqjL2fwerabO591NBc4oo5u7q0VzgVhaI+64Dczn293NTTd4BQRKIW6aks+7jzKYWwFSZ1EAAs0FYmmJuMMNjHHi8+0CZourUB0CQdylnC2HoamjqlU3lIqrcAh1VKz6u7lbIu6IwDQ3zGlxI8sVMgIHIxDWt6UQdw6J6qhqBw+OyovPRo/fM9yWV22TWiLu2J1X3ynVjiZXvGYEIEncZB4k6QZJtxfSmBwS9Uhr90LgcDWuiEAeR9XbTbRE3OEGVr0a5IoD068ZgXMQyBGmSlsXQs1Z/YJ7Tgf53bMQaOqcu7QJetWeyYYszdwAc1Uw/J4RWIgAixphgvksUWOV7VdseLqwc/34xxBo5py7FeIOPz1u8ML038kIGIH5CESYYO6hhyRLDDUaZ5T/R9J9C63jfMT95BEIxDin7BI3qLMxaYW44+o2u43M7no/aAQ+hkDMn5LjH6ANeLeku9a+6HrcHYbA50l6w1B61ccuLRB37gy7gR02J1xwpQjkY6bS50+uqw3VKh1wB1c7389d7bFqC8QdKjS7gR08I1x8lQjEfcW1HDPFsZh9u6scbodX+qfTJTrcPc8d9NWlFog7dlBVn1lUN3Jc4RYQyKEga5Fgs2/30aFZWxgDvbWB49TnDY0u+Wjown6pnbizmpzLCDi3cDICRmAeAiFt16atyj65tmuZ19d+6uMIhOswn6jLq0u1E3f4nr59sIatrgNcYSNwEAK1nxfHpgP4vGk/aBBVWmy+LazKsVM7cYdfntXklc4gV/sQBLLfdi1n22OgxjeIoeov0Y3tkA52oRcikDU2VXJHzcSdgzJUuWvy5DICByEQ4YHx2+a4qdb7rnO0tx+W9FUH4eli60IgR1Fj7ONNUVWqmbhz0Ag6wskIGIHLEchk10J44DskXT80u4X2XN6DfmINBGLzWuVRS83EHWryai0D1xh9zsMILEAgn2u3Mm++UtJLBwxYE6wyXzAgOn40q8tLuQ1vdnfUStxZTe5d9uzu9oMdI5A9MDjXhsRbORNu6srGjsfonk3P6vLqoqjVStyxW+KMzmryPYe7y6oRAebIuyR9qiQ8MCDxVkib/si+3fxdi096jWOppTrnS0dKjxp4De61EnecT/zYIDm0NJjcFiOwNgLh/vK/JX12xcZoF+GSjwEwOMJgtaXNydpjwvlJ+dKRquIB1Ejc16WFx1f8efoZgYsR6ClIUTY4qtLNx4N5VwTykWtVQmCNxH2jpJuH7q02SPyuw9OF9YpA9tfuwRaE9qL+ZHNP6qHNvY7ttdqd1eXV8EmNxB1A/7ikL1ur95yPEWgMAUjstuE8uyfNVI6/jqoclXmtfuqNDckim5PdI6uZJ7URd1ZtVANykcPVlWoZAUj7FkmQWI/zJKvMfRFJyyP9/Lblo6RqXCRrI+5sTFCNWuP8seUcjMBsBFiIIG3mB8Td48U7Y5V5dX66s3vbD66BQNwwWc2lI7URt4OurDFMnUerCPwTSc+W1Jqf9lX6K0tSLMi4iPW4ibkKdr29k+MAVOFKWBNx54loo5PeppbbexECHCG9aJCwq3Jr2bhbc3QsVOasG3YR2xj0CrPP3FKFN0JNxB27IgddqXBmuMqbIfAsSfhpE1gFX2ZLlddCna9wrGJR3mykOOOLEAh1eRWXjtRE3AFsNQYEnidGYEMEsgEaPqhIl5YmPxFwcPolSQ8c/uWbBDcclBVnndXlxUdRq4W4c1Qkq8krnh2u+ioIQNLPH0J99mg1vhTEJ0q6dXjJVuZL0evj+awuL/64qRbizvcHOzZ5HxPJrZyWHsPNC9U4VuP2UZ43UrJE5c3OPMx6eyq0usVHUauBuLPvts+oeptKbm8gkKXs4heWArstX0TiwCwFdlABVarG3bgG4s6RbYo/eyhg8LkKbSEA4aAWh7gxzGQ+ID06LUcgW5mjxePYzckIBALVXBddA3GH+gLfVFSDTkagFwQ4dyNsKeRtq/F1ej1HVbPKfB1MW8oFG4jHSSraCLp04s47ZE+ylqaH23IZAs8ZpGueYxFBjWer8ctQu/z/Y5W5A7NcjllPTwTnFB1FrXTijkhpSBuoMZyMQOsIIGUTTIVPq8a36e0sELBAcwTnTdE2WNeWKxu79w+VLjaKWsnEnW/5Kd48v7bR6foWiUCWst84BFSx1fg2XZUDsyAgsEibvLfBurZcY2wUawxdMnFnFzCkbU+q2oa/6zsXgSxl806xC8bcBlXynMm7ko7auZoRN6TYKGqlEvfDJSFxeBHbecS6uN0RuGk4y0ZFh2ocNS6bVqd9EMjGakjeRFZzMgJhFF2kJ1OpxP0jkp4yjJ0igfO4NgJnIoAWiWAqSNskq8bPBPSKr7NhwpL4EcP7SOEYwjr1jUAE7CnymLZE4s6+dD8p6Ql9jx+3vkEEspRN83xf9LGdPCZv98ex/VFC6cFD75B0XQkVynUokbhzaELHJS9txLg+5yDAYkAwFc7QSPbNPgfNdd8dk/eTJL1y3SKcW2UI3CHpekn3Ks3GqjTiZvLcmQJO2AWsspHu6p5EYCxlY4BGFDQbXZYzaFhvOLK4x1AlfOfpJ6c+EYioncXFECmNuLN/pdVVfU6W1loNGeCXHVH/bIBWdg9/iaSfTVXk/BvNnzdYZffbFrWLG8OKuxugNOIOSz46wUZpWwxF57knApay90R7vbJYsDFSC4M11iXIG6tzp74QCE4qiitLqkyWth2XvK/J0VprLWXX36Mc22Fv86zUFKvO6+/XpS0IX/+i7K1KIu4sbRcF0tKe9vNdI5CjnwGE44zXPRzyVY+0hHWKs0/61al9BCIYS1GXjpRC3Fnadlzy9idDiy0cRz9jHDOuOSN1qhsB7BMI1HLP1AzOvG+V9EJJr5poHuPh7pI+eeJ/aGSQ6PmZSqjk40z9d0/kwXu8H3mdQjifzX+qpAdL+rUTD7MpySF27ycJy2q+6/mMn7Z/pKSY9qUQd5a2i3R4r3vdce03RsBS9sYAF5A90RxZm54m6W6j+vyGpHdLetAFZFxAE86uAhsK1mo+2ZBypNlDCnV5MdblJRB3lraxuD21C+1hgLiNdSGAVEX0s3BbxJUI1aql7Lr6MaRXjNHoS37CC4A+3npNYt3L0nxN6DHW+cHyulXjvVCX004uozk8lUDcWdq2C9jhQ8IVmIEACzmBVNh0RmLsYszUs0pxBnSHP0LfQdAQMgTN51XIGbJ9p6SHSPo9qVXvk/R9kv69JH6/9zAmKDerwOcAQf3wKSePqRTq9ovU7uPx+OmSXp0yo04RdndcBqry94xU8pTF84+bqBBqfVzpyJOjBTayrcwH2sHmqghvp6OJeyxt+xawOdPZzxyJALtv/LJDCrOUfWRvXFw2BEO4Sj6RoEOavugtCDkkx9CcBOGyeI+lSsYBxmq4/uWEQMJGDkm01atZA1ewffIJUEOtDpHXrFoPdXkRwuXRxB27GPq8CEDKXYNcs4MRmJKybY9xcKek4iGRkKRvkPRoSZ8yUb0g5kzCEPQUKS9pHeQFgU9JopAWP5B4KxLoFDb0ARtbsJjCgbZnLJbge/SzRV31eSRxjy3J6fSWB/XRAwP+C7IAAAtxSURBVM/lXw0BCBtp4vsl/d4hCyQHJrLH69UwPfctiCFIOlTdOU/I+X9IetMgIYe19FJV9VXqSX2wc2B8jM+tGS+oklGlY5HecmLe0E9B5OOLOsACKRY3q1rOxkPQPNxd+SjiplPfkIx6LG23PIXrbRsLD2fZcQb425K+YVhw6m1VPTVHtT0m6Kn7C9hIsfjnn6NbyRoHafFzmRqZetOGVlXq9AVzCGENPMYkjsYjjhWO7reLyg91+UskPePIih5F3D8s6elDw9kd+2z7yFHgsscIjCOf8X9fCrL9OAl1NxumOJMeS9JxZhokXQPZBYn/3eG2qVNIhro+NANjv+pPk/TBiZdZQwOHMFRD2gfP/H1+lbJ4NmuNTmmQ8rn/GqMA8kYrMVanR3CbUo8UbpR08wDAoTeGHUHcEbg9BgA+sN++xmhwHkZgBQTC0CiMz5CEkBRqIIgVmr9rFmyQWLxPETXYh7vRHmruPRofqv0w7Ip46HuUfU4ZW/gw0//MtxxWljqygUACR41e0rxDUxD1OVRLfARxZ/evD0t6gM8Kz5lPfnclBCAPrMVDFUvkM6QCjGmc1kEgJGokri8Y5n7OGaIGb8i6lnPPNZCJjQufYFSiT/cWxB3YsUlmrvEzbjvqaUiyFAIPdTmbC6TuQ9LexM0uKrtNFBX/9ZAecKFHIzBlLW61+Pm9Aq5I09llaJwrEcd+aCBqb5CuRWfKt5yIbR8agXiRixt+1W8b1OvjIDJLVOXnWtzPHU1xpIAUPj4H/xeS/mYBQh543zk0aMvNzIWY7Unc7CZvG9XmkZ3trOcOYD+3DwJTPtl8V8rufh8U1inlMrU3pYTqOwJ0rFOyc2kRAeYhR1TZsI9xgwvm0ZEJ2WRSL9YJArLsnvYi7rEVOQ31ZSK7d7cLHBBAmsFaPMJaYnzDLh+NkNM8BLLaGxzHEh3zOwzJelN9z0PQT81B4C8O7nNc2BKJeYr6/Ch3zPDppj6EQN19I7EXcce5QO6ow9QMc0aLn2kSAaRCDGEg6UhYsLKzP2oRqAXoLFGzcI2JmghyQdB8WmtRS8+WX0/GGmMqG/IxX5nHHGsdkcKn+5D45XsQ95SK3C5gRwy1fstk4mNbkQnboUovHg+Xqb7Ddzqsvr3x6Xd+7dVyjNeYw9mA7aj70bO91u5S9x7Ena3Io4MPNaXfa5S5nCIQQJomUlVEPbO1+OluQZIO96zxxRNsdDjbC/W3ibqI4d1dJdhQQprjoDZsIIlotte4zEZqt0sizO5uaWviZofEWWJOLJwOb7pbF3dbEJoeYgTEOXZEPYN89prcpYPPPGQB5I7pzxlV1kRdeu/1XT825GPrc+Y1R7B7eSiwiQ31/a5S95bEPQ60EsPMZ9t9T7itW89OGMLOV27aveujqEfc9Yghnc+pub7xhZaotx6ezn9FBML/m/me016X/3yrpO8cCn6BpG9csW0XZrUlcefdSFSCc7GQgPZqo8vpBwE0PEziICSrxT+q3UKqRg2e1d/YmUSwE2sh+pkjLbYUTmEM57NvDKIRErdOrx9uoqOcLfn0mnZsVdCTJL1iArEiLiHfuied/+4IjC8DoQIE94HIe1OLh1FZ3MqUpepQf8dZ9e4d5QKNwEYIMO4Z19nynDsxvmqj8iLbl0l66vDHbrZbWxH3OEIa7dpLfbFxPzn7ghCAlJCwIehISNmoyXf3rTwQFyTqCJuZpWqwCKtvS9UHdpCL3gUB1gMk7Wy4RpSzv7LhegBpQ96k3VzDtiBujFxePYrj+ipJf2KXrnMhvSAwjnpGu3s5yw71d5B17nP80vPFHL2MB7fTCAQCU3FDmBOozreIL3BHuvXt6wdbkU17YwvizqqDWEyzRLRpg5x58whMXbnZupR9kVFZBD6J8+rmB4AbaARmIPC9kr5p4rktoq79gqRHDWX9q4nbzmZUd9kjaxM3tytla97ddP7Lmu2nK0VgbHzWspSNVE2Ut7gxKros1N9B1L2d4Vc6dF3tAxBgDiFpj28cQ+rm6HYtt7Ex732WpLdu2d41ifvrRioCfENfvmXlnXc3CCBx3jLySGhNyj4lVWP9zeITRL2Fqq+bgeSGdofA1Ll3gMCcgsDPnVNsrp8niUuzSPiXI7RultYk7hxsZS9T/M2AccbFIIAGhyA+2Tq6lbNs1P7hqpXdJG39Xczwc0UaQWAqGBhNQ2OF+pw15RztFWSd/cnX5NZP6IK1M3/mUMIPNtLZbsZxCLQqZRNSFMM6fiBuktXfx40zl9wPAmyOIensMhatf8cQTOXmK8KRrcvJ4qGS3nzFvC59bW3ivrRAP2AEZiAwZTFeq192vqyDKwrvOrSfYESh/iZYkZMRMAL7IDB1WUmUfFW7LLypfjlVf1P3ZxP3PgPFpcxDgB3xc0cB+2uMfhZSdTYsox2cpbHj58z6HLXcPDT9lBEwAqcQOHVZCc9jmxU/SxAkbPAfGF7YNPiLiXtJt/jZrRCYcvGirFrOsrFezWRN3cOozD7VW40a52sEzkcA7d73S7rPRFZvGbykXjezmBz+9FclPWTme4sfM3EvhswvrIgA59gYnmUXQrJn0CN5/8CKZa2Z1amwovapXhNl52UE9kNgbFyWS2bzzSUifL73giqhYbtt+P+mUdRM3PsNDJd0LQJT1uI8UeJZNhuMuKd6yqgs3LWs/vYoNwL1IvBgSf84xR4ft4R7t185hDidMjwbu0RvZqBm4q53kNVa8ylrcdpS2ll2Juoc/9shRWsdea63EZiHwFTY7vGbL5X0DSNblbFl+Q2SIPvVk4l7dUid4QUIQIAEUgk3qHgUMkQCP1JiPRX/G+vvOKfu6eISD2Qj0DMCcQ/A+K7vjEkYsKE+/63BnexPpQc2uw3TxN3z0Ny37adU41d1vzi39mFQFhM0ArzEOXWQ9ZGbiXPb6PeNgBE4D4EvHS4nias75+bmM+65SPm5YhE4ZfjBbT1E2dsjnSJqVPTZn/rc8Id7tMVlGAEjsC8CbPAh7xtnFvv4Da8SlSXumb3gx66EAFIsAfgx6MoJsuS7LQOPBFHzmQOf5Duq2RWbqK/UtX7JCHSJABI4axeGaKfSByXdf1CfbwKSiXsTWJ2pJAgT0s6GXQCDKpqBvzZhXiRRUxaSvYnaQ9MIGIE1EHiCpC+X9EXDlZ4Yod1F0u9IunW4aGSNcibzMHFvBm3XGUOiGG7gXpETrl5jn+2rAnURUSPJo/7mc0up/qp193tGwAgYgSsjYOK+MnR+8QQCWIxjOT6WtM+N3XsRUWer77UleXe0ETACRqAoBEzcRXVH9ZXhTJvIQZm0f0XSM64g+eYzalTrYfVNKNGQpvk0UVc/bNwAI2AEliBg4l6Clp+9CIGpwCr4QEO6c1yqskTN7+Hr7ZjfHndGwAgYgYSAidvDYS0EuPXqppTZZefZEfCET1wtQqImiwh6EpL1WnV0PkbACBiB6hEwcVffhUU0ANJ9f6rJqfNsCPprJT1F0qek5x2drIhudCWMgBGoAQETdw29VH4d860446AqkPqTB2tynsOP+kNDoP4wKiu/ha6hETACRqAQBEzchXRE5dXAR/pZw1k2KvNInFOH+1dEKOP/NiirvMNdfSNgBI5DwMR9HPatlDxWk4/bRcAVyJrz6jlGaq3g4nYYASNgBDZBwMS9CaxdZZqJ++ck/dTQ+gh+Yum6q+HgxhoBI7A1AiburRHuI/+wCLdE3Ud/u5VGwAgciICJ+0DwXbQRMAJGwAgYgaUImLiXIubnjYARMAJGwAgciICJ+0DwXbQRMAJGwAgYgaUImLiXIubnjYARMAJGwAgciICJ+0DwXbQRMAJGwAgYgaUImLiXIubnjYARMAJGwAgciICJ+0DwXbQRMAJGwAgYgaUImLiXIubnjYARMAJGwAgciMD/AwvAKjvuGmrdAAAAAElFTkSuQmCC",
    },
  }),
  beforeMount() {
    this.listar();
  },
  methods: {
    listar() {
      this.informacion.nombre = 12345;
    },
  },
};
</script>
<style >
.lafirma {
  height: 100%;
  width: 100%;
}
.gridfirma {
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(1, auto);
  background-color: #424242;
  align-items: center;

  /* border: 5px solid black; */
}

.nombrefirma {
  text-align: center;
  text-justify: justify;
}
.miimagen {
  content: url("../imagenes/logo/biosystems.jpg");
}
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
.grid > div {
  background-color: #ffffff;
  padding: 5px;
  text-align: center;
  text-justify: center;
  border-radius: 3px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, auto);
  gap: 1px;
}
.principal {
  padding: 0px;
  background-color: #424242;
}
.titulo {
  grid-column: 1;
}
.gridencabezado {
  display: grid;

  grid-template-columns: 2fr 4fr 3fr;
  grid-template-rows: repeat(1, auto);
  gap: 1px;
  background-color: #424242;
}
.gridencabezado > div {
  align-items: center;

  background-color: #ffffff;
  padding: 5px;
  text-align: center;
  text-justify: center;
  border-radius: 3px;

  /* border: 5px solid black; */
}
.nombrereporte {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150%;
}
.gridcontenido {
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(1, auto);
  gap: 1px;
  background-color: #424242;
}
.gridcontenido > div {
  background-color: #ffffff;
  padding: 5px;
  text-align: justify;
  text-justify: center;
  border-radius: 3px;

  /* border: 5px solid black; */
}
.paddingfilas {
  background-color: #424242;
  display: grid;
  row-gap: 2px;
  padding: 3px;
}
.gridtitulo {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(1, auto);
  gap: 1px;
  background-color: #424242;
}
.gridtitulo > div {
  background-color: #cfd8dc;
  padding: 5px;
  text-align: center;
  text-justify: center;
  border-radius: 3px;

  /* border: 5px solid black; */
}
.gridparejas {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: repeat(1, 2);
  background-color: #424242;
  align-items: center;

  /* border: 5px solid black; */
}

.dato {
  text-align: left;
  text-justify: center;
}
.negrita {
  font-weight: bold;
}
.subtitulonegrita {
  font-weight: 500;
}
img {
  width: 70%;
  height: 100%;
  align-self: center;
}

@media (max-width: 767px) {
  .lafirma {
    height: 100%;
    width: 100%;
  }

  .gridfirma {
    display: grid;
    grid-template-columns: 3fr 3fr;
    grid-template-rows: repeat(1, auto);
    background-color: #424242;
    align-items: center;

    /* border: 5px solid black; */
  }

  .nombrefirma {
    text-align: center;
    text-justify: justify;
  }
  .miimagen {
    content: url("../imagenes/logo/BS.png");
    width: 100%;
    height: 100%;
  }
  .nombrereporte {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100%;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(auto, auto);
    gap: 1px;
  }
  .principal {
    padding: 0px;
    background-color: #424242;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .imgagenfirma {
    width: 100%;
    height: 100%;
  }

  .gridparejas {
    display: grid;
    grid-template-columns: 3fr 3fr;
    grid-template-rows: repeat(1, auto);
    background-color: #424242;
    align-items: center;

    /* border: 5px solid black; */
  }
  .paddingfilas {
    background-color: #424242;
    display: grid;
    row-gap: 2px;
    padding: 2px;
    -webkit-print-color-adjust: exact;
  }
}
@media print {
  .lafirma {
    height: 100%;
    width: 100%;
  }
  .gridfirma {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, auto);
    background-color: #424242;
    align-items: center;

    /* border: 5px solid black; */
  }

  .nombrefirma {
    text-align: center;
    text-justify: justify;
  }
  .miimagen {
    background: url("../imagenes/logo/biosystems.jpg");
  }
  .grid > div {
    background-color: #ffffff;
    padding: 5px;
    /* border: 5px solid black; */
    text-align: center;
    text-justify: center;
    border-radius: 3px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, auto);
    gap: 1px;
  }
  .principal {
    padding: 0px;
    background-color: #424242;
    -webkit-print-color-adjust: exact;
  }
  .titulo {
    grid-column: 1;
  }
  .gridencabezado {
    display: grid;

    grid-template-columns: 2fr 4fr 3fr;
    grid-template-rows: repeat(1, auto);
    gap: 1px;
    background-color: #424242;
  }
  .gridencabezado > div {
    align-items: center;

    background-color: #ffffff;
    padding: 5px;
    text-align: center;
    text-justify: center;
    border-radius: 3px;

    /* border: 5px solid black; */
  }
  .nombrereporte {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100%;
  }
  .gridcontenido {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, auto);
    gap: 1px;
    background-color: #424242;
  }
  .gridcontenido > div {
    background-color: #ffffff;
    padding: 5px;
    text-align: justify;
    text-justify: center;
    border-radius: 3px;

    /* border: 5px solid black; */
  }
  .paddingfilas {
    background-color: #424242;
    display: grid;
    row-gap: 2px;
    padding: 5px;
    -webkit-print-color-adjust: exact;
  }
  .gridtitulo {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, auto);
    gap: 1px;
    background-color: #424242;
  }
  .gridtitulo > div {
    background-color: #cfd8dc;
    padding: 5px;
    text-align: center;
    text-justify: center;
    border-radius: 3px;

    /* border: 5px solid black; */
  }
  .gridparejas {
    display: grid;
    grid-template-columns: 3fr 4fr;
    grid-template-rows: repeat(1, auto);
    background-color: #424242;
    align-items: center;

    /* border: 5px solid black; */
  }
  .dato {
    text-align: left;
    text-justify: center;
  }
  .negrita {
    font-weight: bold;
  }
  .subtitulonegrita {
    font-weight: 500;
  }
  .imagenfirma {
    width: 70%;
    height: 100%;
  }
}
</style>
