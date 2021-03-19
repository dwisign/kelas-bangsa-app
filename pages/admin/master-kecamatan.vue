<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4><b-icon icon="collection"></b-icon> Master Kecamatan</h4>
      </b-col> 
      <b-col md="4" class="text-right">
        <!-- <b-button pill variant="info" v-b-modal.modal-add-kecamatan><b-icon icon="plus-circle-fill"></b-icon> Add Kecamatan</b-button> -->
      </b-col>
    </b-row>
    <b-container fluid class="mt-5">
      <b-row align-h="between" class="mb-5">
        <b-col md="3">
          <b-form-group>
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input>

              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''" variant="info">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group
            label="Per page"
            label-for="per-page-select"
            label-cols-sm="6"
            label-cols-md="4"
            label-cols-lg="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <b-table
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        stacked="md"
        show-empty
        small
        @filtered="onFiltered"
      >
        <template v-slot:cell(actions)="row">
        <b-form-checkbox-group>
          <b-form-checkbox
            v-model="row.item.actions"
            type="checkbox"
            value="Active"
            unchecked-value="Inactive"
          >
          {{ items.status }}
          </b-form-checkbox>
        </b-form-checkbox-group>
      </template>

        <template #row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </b-card>
        </template>
      </b-table>

      <b-row align-h="end" class="mt-5">
        <b-col md="3">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>

      <b-modal id="modal-add-kecamatan" title="Add Kecamatan" hide-footer centered>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="Nama kecamatan:" label-for="nama_kecamatan">
            <b-form-select
              id="nama_kecamatan"
              v-model="form.nama_kecamatan"
              :options="nama_kecamatans"
              required
            ></b-form-select>
          </b-form-group>
          <br><br>
          <b-form-group class="text-right">
            <b-button type="submit">Submit</b-button>
          </b-form-group>
        </b-form>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'admin-inside',
  data() {
      return {
        items: [
          { isActive: true, id_kecamatan: 'KB-Kc-001', nama_kecamatan: 'Cengkareng'},
          { isActive: true, id_kecamatan: 'KB-Kc-002', nama_kecamatan: 'kalideres'},
          { isActive: true, id_kecamatan: 'KB-Kc-003', nama_kecamatan: 'Inpres'},
          { isActive: true, id_kecamatan: 'KB-Kc-004', nama_kecamatan: 'Karang Tengah'},
          { isActive: true, id_kecamatan: 'KB-Kc-005', nama_kecamatan: 'Pondok Kacang'},
          { isActive: true, id_kecamatan: 'KB-Kc-006', nama_kecamatan: 'Larangan'},
          { isActive: true, id_kecamatan: 'KB-Kc-007', nama_kecamatan: 'Grogol Petamburan'},
          { isActive: true, id_kecamatan: 'KB-Kc-008', nama_kecamatan: 'Cilandak'}
        ],
        fields: [
          { key: 'id_kecamatan', label: 'ID Kecamatan', sortable: true, sortDirection: 'desc' },
          { key: 'nama_kecamatan', label: 'Nama Kecamatan', sortable: true, sortDirection: 'desc' },
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
        form: {
          nama_kecamatan: '',
        },
        nama_kecamatans: [{ text: 'Pilih Nama Kecamatan', value: null }, 'Jakarta', 'Bandung', 'Semarang', 'Medan', 'Tangerang','Yogyakarta', 'Bekasi', 'Bogor'],
        show: true
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.nama_kategori = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
}
</script>
