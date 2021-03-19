<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4><b-icon icon="collection"></b-icon> Master Bank</h4>
      </b-col> 
      <b-col md="4" class="text-right">
        <b-button pill variant="info" v-b-modal.modal-add-bank><b-icon icon="plus-circle-fill"></b-icon> Add Bank</b-button>
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
        <template #cell(actions)>
          <b-dropdown size="sm" id="dropdown-left"  variant="light">
            <b-dropdown-item href="#" v-b-modal.modal-add-bank>Update</b-dropdown-item>
            <b-dropdown-item href="#">Delete</b-dropdown-item>
          </b-dropdown>
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

      <b-modal id="modal-add-bank" title="Add Bank" hide-footer centered>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Nama Bank:" label-for="nama_bank">
            <b-form-input
              id="nama_bank"
              v-model="form.nama_bank"
              placeholder="Contoh : Bank BCA"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Nomor Rekening:" label-for="nomor_rekening">
            <b-form-input
              id="nomor_rekening"
              v-model="form.nomor_rekening"
              placeholder="Contoh : 8736252517"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Nama Pemilik Rekening:" label-for="nama_pemilik_rekening">
            <b-form-input
              id="nama_pemilik_rekening"
              v-model="form.nama_pemilik_rekening"
              placeholder="Contoh : Jhon Doe Celalu Cetiya"
              required
            ></b-form-input>
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
          { isActive: true, nama_bank: 'BCA', nomor_rekening: '027837297331', nama_pemilik_rekening: 'Kelas Bangsa' },
          { isActive: true, nama_bank: 'BNI', nomor_rekening: '027837297332', nama_pemilik_rekening: 'Kelas Bangsa' },
          { isActive: true, nama_bank: 'Mandiri', nomor_rekening: '027837297333', nama_pemilik_rekening: 'Kelas Bangsa' },
          { isActive: true, nama_bank: 'BRI', nomor_rekening: '027837297334', nama_pemilik_rekening: 'Kelas Bangsa' },
          { isActive: true, nama_bank: 'CIMB', nomor_rekening: '027837297335', nama_pemilik_rekening: 'Kelas Bangsa' },
          { isActive: true, nama_bank: 'BTPN', nomor_rekening: '027837297336', nama_pemilik_rekening: 'Kelas Bangsa' },
          { isActive: true, nama_bank: 'RABO BANK', nomor_rekening: '027837297337', nama_pemilik_rekening: 'Kelas Bangsa' },
          { isActive: true, nama_bank: 'BANK JAGO', nomor_rekening: '027837297338', nama_pemilik_rekening: 'Kelas Bangsa' },
          { isActive: true, nama_bank: 'BSI', nomor_rekening: '027837297339', nama_pemilik_rekening: 'Kelas Bangsa' }
        ],
        fields: [
          { key: 'nama_bank', label: 'Nama Bank', sortable: true, sortDirection: 'desc' },
          { key: 'nomor_rekening', label: 'No Rekening', sortable: true, sortDirection: 'desc' },
          { key: 'nama_pemilik_rekening', label: 'Nama Pemilik Rekening', sortable: true, sortDirection: 'desc' },
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
          nama_bank: '',
          nomor_rekening: '',
          nama_pemilik_rekening: ''
        },
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
        this.form.nama_bank = ''
        this.form.nomor_rekening = ''
        this.form.nama_pemilik_rekening = ''
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
