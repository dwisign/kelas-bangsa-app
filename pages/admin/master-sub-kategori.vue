<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4><b-icon icon="collection"></b-icon> Master Sub Kategori</h4>
      </b-col> 
      <b-col md="4" class="text-right">
        <b-button pill variant="info" v-b-modal.modal-add-sub-kategori><b-icon icon="plus-circle-fill"></b-icon> Add Sub Kategori</b-button>
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
            <b-dropdown-item href="#" v-b-modal.modal-add-sub-kategori>Update</b-dropdown-item>
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

      <b-modal id="modal-add-sub-kategori" title="Add Sub Kategori" hide-footer centered>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Nama Sub Kategori:" label-for="nama_sub_kategori">
            <b-form-input
              id="nama_sub_kategori"
              v-model="form.nama_sub_kategori"
              placeholder="Contoh : Bahasa Indonesia"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Parent Kategori:" label-for="nama_parent_kategori">
            <b-form-select
              id="nama_parent_kategori"
              v-model="form.nama_parent_kategori"
              :options="nama_parent_kategoris"
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
          { isActive: true, id_sub_kategori: 'KB-SK-001', nama_sub_kategori: 'Bahasa Indonesia', nama_parent_kategori: 'Bahasa'},
          { isActive: true, id_sub_kategori: 'KB-SK-002', nama_sub_kategori: 'Bahasa Inggris', nama_parent_kategori: 'Bahasa'},
          { isActive: true, id_sub_kategori: 'KB-SK-003', nama_sub_kategori: 'Bahasa Jepang', nama_parent_kategori: 'Bahasa'},
          { isActive: true, id_sub_kategori: 'KB-SK-004', nama_sub_kategori: 'Matematika', nama_parent_kategori: 'Pengetahuan Alam'},
          { isActive: true, id_sub_kategori: 'KB-SK-005', nama_sub_kategori: 'Fisika', nama_parent_kategori: 'Pengetahuan Alam'},
          { isActive: true, id_sub_kategori: 'KB-SK-006', nama_sub_kategori: 'Biologi', nama_parent_kategori: 'Pengetahuan Alam'},
          { isActive: true, id_sub_kategori: 'KB-SK-007', nama_sub_kategori: 'Seni Musik', nama_parent_kategori: 'Seni'},
          { isActive: true, id_sub_kategori: 'KB-SK-008', nama_sub_kategori: 'Seni Rupa', nama_parent_kategori: 'Seni'}
        ],
        fields: [
          { key: 'id_sub_kategori', label: 'ID Sub Kategori', sortable: true, sortDirection: 'desc' },
          { key: 'nama_sub_kategori', label: 'Nama Sub Kategori', sortable: true, sortDirection: 'desc' },
          { key: 'nama_parent_kategori', label: 'Nama Parent Kategori', sortable: true, sortDirection: 'desc' },
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
          nama_sub_kategori: '',
          nama_parent_kategori: ''
        },
        nama_parent_kategoris: [{ text: 'Pilih Parent Kategori', value: null }, 'Bahasa', 'Pengetahuan Alam', 'Pengetahuan Sosial', 'Seni'],
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
        this.form.nama_sub_kategori = ''
        this.form.nama_parent_kategori = ''
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
