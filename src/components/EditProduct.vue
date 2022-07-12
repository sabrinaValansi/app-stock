<template>
  <div class="mt-5">
    <div v-if="nombre != null">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Edicion de producto</h1>
        </div>
      </section>
      <vue-form class="mt-5" :state="formState" @submit.prevent="saveData">

        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" v-model.trim="nombre" name="nombre" id="nombre" class="form-control" required :minlength="nombreMinLength">

          <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
              <div slot="minlength" class="alert alert-danger mt-1">El nombre de tener como minimo {{nombreMinLength}} caracteres</div>
          </field-messages>
        </validate>

       <validate tag="div">
        <label for="sku">Sku</label>
        <input type="text" v-model.trim="sku" name="sku" id="sku" class="form-control" required :minlength="skuLength">
        
        <field-messages name="sku" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">El sku debe de tener como minimo {{skuLength}} caracteres</div>
        </field-messages>
        </validate>

        <validate tag="div">
        <label for="precio">Precio</label>
        <input type="number" v-model="precio" name="precio" class="form-control" required :min="minimo">
        <field-messages name="precio" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">El precio minimo es ${{minimo}}.</div>
        </field-messages>
        </validate>

       <validate tag="div">
        <label for="stock">Stock</label>
        <input type="number" v-model="stock" name="stock" class="form-control" required :min="minimo">
        <field-messages name="stock" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">El stock minimo es ${{minimo}}.</div>
        </field-messages>
        </validate>

        <label for="estado">Estado</label>
        <select name="estado" id="estado" v-model="estado" class="form-control">
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
        <button class="btn btn-primary my-2 mt-2" :disabled="$invalid">
          Enviar
        </button>
      </vue-form>
    </div>
    <section class="jumbotron text-center mt-5" v-else>
        <div class="container">
          <h1 class="jumbotron-heading">El producto no existe.</h1>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "EditProduct",
  data() {
    return {
      nombre: null,
      sku: null,
      precio: null,
      stock: null,
      estado: null,
      nombreMinLength : 3,
      skuLength:6,
      minimo:1,
      formState:{}
    };
  },
  mounted() {
    let { id } = this.$route.params;
    if (id) {
      this.axios.get(`${this.$store.state.url}/${id}`).then((res) => {
        if (res.data) {
          (this.id = this.$route.params),
          (this.nombre = res.data.nombre),
          (this.sku = res.data.sku),
          (this.precio = res.data.precio),
          (this.stock = res.data.stock), 
          (this.estado = res.data.estado);
        }
      });
    }
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      this.editarProducto();
    },
  },
};
</script>