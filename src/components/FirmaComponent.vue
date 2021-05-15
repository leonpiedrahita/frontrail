<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-2">
          <VueSignaturePad
            id="signature"
            width="380px"
            height="400px"
            ref="signaturePad"
            :options="options"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-3 mt-2">
          <button class="btn btn-outline-secondary" @click="undo">Undo</button>
        </div>
        <div class="col-3 mt-2">
          <button class="btn btn-outline-primary" @click="save">Save</button>
        </div>
      </div>
    </div>
    <div class= "lafirma">
    <img  :src=options.firma >
    </div>
  </div>
</template>

<script>


export default {
  
  name: "App",
  data: () => ({
    options: {
      penColor: "black",
      firma:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAABeCAYAAADcxNOgAAAFMUlEQVR4Xu2aTWtcZRiGr3fSQsWPxm8o0qZoEeyiiWmjXYjd6UKhO110oX/Dn+LGLhTX7l3UVdE0JhEUtC6CiPWrIaWISNJ55J05o6KJhDAnec7kOjC0dJL33HPdz5X3nJMWPCQggVQESqo0hpGABFBKh0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4ElBKZ0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4ElBKZ0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4ElBKZ0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4ElBKZ0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4ElBKZ0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4ElBKZ0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4ElBKZ0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4ElBKZ0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4ElBKZ0ACyQgoZbJCjCMBpXQGJJCMgFImK8Q4EuiclDeIy8CpPqwUKEdgZY6yUav8jJgFjhd4JuDb+m9HYXX0vnVLoAsEOiXlEvFWwHt7BLsGrMVQ5pU+rC5QVva4lt8mgdYIHCYpd4L4fYFlYClgo+7A9QvrLnyBcq018i4sgR0IdErKZWL6HlwKmC3D13T9e71kbbHhemlcRT0C/Fqg7rgb92Ak7B133BbpH8KlOyXlTv1UWftwOeAScAWYOoAuR/LWXXYgLvB+Hx50xz2ANjp8yomQ8t/8l4iXgKf7MFPf6w1l/c8Rw93vEWC9wFbANHBu3H0GfFPgeMB3Ba4GfDUFXz5P+WXc53K97hOYSCnHUUvdfbeGl8aj49UCJ4GfgenSCB/DP0/t5ZyNrCfqZXF9CLWLNeoPjSeB28ADNUfzqt9ad+b6OtY8gV4PuFn+vswmYK3fnMen0rugfUBfopRjAr9MzGzBTL3PBV4EngXOAGfHdIo2ltkC/gDqjj24qvjHcTfgaIE7AR8Bt3rwQ8DqecqnS8R8vTRvrkTuFrg/4Ld5ylIbQQ/TmkrZctufE48HvBPwBPAK8GjLpzzo5VfrLUDAu8BmgU8CvrhA+fqgg3Xl/Eq5z001O8zrzQ4zBzwX8HuB9VGUnS6JA37qwVTA7QI/bhc94CmgXhLft88fbTenu1bgw/qF85Qqrcc2BJRygsei3hdvNpfUPZgZPfhqfiDUXy3Vh1pbBa7H8FK0ivxCfT/gFvBwGd6jtnJswumLlN3cS7dy/qyLKmXWZpLkWiQWejDbhxMFXhtscmM6+vD2AuXqmJabmGWUcmKq3L8PcoN47DylPjFmkRj8uqn+D6iA08DJAi838g4eBO10FLgyT/lg/5J340xK2Y2eOplykXizBw8BF5v75CpwfTo7X+DjY/DGWcpf99Kd/JAthFbKFqC65P8TWCbOzFFuyml7AkrpZEggGQGlTFaIcSSglM6ABJIRUMpkhRhHAkrpDEggGQGlTFaIcSSglM6ABJIRUMpkhRhHAkrpDEggGQGlTFaIcSSglM6ABJIRUMpkhRhHAkrpDEggGQGlTFaIcSSglM6ABJIRUMpkhRhHAkrpDEggGQGlTFaIcSSglM6ABJIRUMpkhRhHAkrpDEggGQGlTFaIcSSglM6ABJIRUMpkhRhHAkrpDEggGQGlTFaIcSSglM6ABJIRUMpkhRhHAkrpDEggGQGlTFaIcSSglM6ABJIRUMpkhRhHAkrpDEggGQGlTFaIcSSglM6ABJIRUMpkhRhHAkrpDEggGYE/ARGquV+j5bAxAAAAAElFTkSuQmCC"
    },
 

  }),
  
  methods: {


    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature('image/png');
      console.log(isEmpty);
      console.log(data);
      
      
    },
  }
};
</script>

<style>
.lafirma{
  height: 100px;
  width:100px
}
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #000000, #000000);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>