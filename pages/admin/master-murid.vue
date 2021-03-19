<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4><b-icon icon="collection"></b-icon> Master Murid</h4>
      </b-col> 
      <b-col md="4" class="text-right">
        <!-- <b-button pill variant="info"><b-icon icon="plus-circle-fill"></b-icon> Add Guru</b-button> -->
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
        <!-- <template #cell(guru_name)="row">
          {{ row.value.first }} {{ row.value.last }}
        </template> -->

        <template #cell(actions)="row">
          <!-- <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
            Show Detail
          </b-button> -->
          <!-- <b-button size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
          </b-button> -->
          <b-dropdown size="sm" id="dropdown-left" variant="light">
            <b-dropdown-item @click="row.toggleDetails">{{ row.detailsShowing ? 'Hide' : 'Show' }} Detail</b-dropdown-item>
            <b-dropdown-item href="#">Update</b-dropdown-item>
            <b-dropdown-item href="#">Delete</b-dropdown-item>
          </b-dropdown>
        </template>

        <template #row-details="row">
          <b-card>
            <div v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</div>
            <!-- <div><p><b>Alamat :</b> {{ items.guru_alamat }}</p></div> -->
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

      <!-- Info modal -->
      <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
        <pre>{{ infoModal.content }}</pre>
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
          { guru_id: 40, guru_name: 'Dickerson Macdonald', guru_tingkat_sekolah: 'SD', guru_email: 'dickerson@mail.com', guru_hp: '081234567890',guru_alamat: 'ciledug raya', jenis_kelamin:'Laki-laki', tanggal_lahir:'15 Maret 1980', provinsi: 'Banten', kota: 'Tangerang Kota', alamat: 'Jalan manggis 3 nomor 21, rt. 003/09 Pondok Kacang Timur' },
          { guru_id: 21, guru_name: 'larsen Shaw', guru_tingkat_sekolah: 'SMP', guru_email: 'larsen@mail.com', guru_hp: '081234567891' },
          { guru_id: 89, guru_name: 'Geneva wilson', guru_tingkat_sekolah: 'SMA', guru_email: 'geneva@mail.com', guru_hp: '081234567892' },
          { guru_id: 38, guru_name: 'Jami Carney ', guru_tingkat_sekolah: 'SMA', guru_email: 'jemi@mail.com', guru_hp: '081234567893' },
          { guru_id: 27, guru_name: 'Essie Dunlap', guru_tingkat_sekolah: 'SMA', guru_email: 'essie@mail.com', guru_hp: '081234567894' },
          { guru_id: 40, guru_name: 'Thor Macdonald', guru_tingkat_sekolah: 'SD', guru_email: 'thor@mail.com', guru_hp: '081234567895' },
          { guru_id: 26, guru_name: 'Mitzi Navarro', guru_tingkat_sekolah: 'SMP', guru_email: 'mitzi@mail.com', guru_hp: '081234567896' },
          { guru_id: 22, guru_name: 'Genevieve Wilson', guru_tingkat_sekolah: 'SMP', guru_email: 'genevieve@mail.com', guru_hp: '081234567897' },
          { guru_id: 38, guru_name: 'Jhon Carney', guru_tingkat_sekolah: 'SMA', guru_email: 'jhon@mail.com', guru_hp: '081234567898' },
          { guru_id: 29, guru_name: 'Dick Dunlap', guru_tingkat_sekolah: 'SMP', guru_email: 'dick@mail.com', guru_hp: '081234567899' }
        ],
        fields: [
          { key: 'guru_id', label: 'Guru ID', sortable: true, sortDirection: 'desc' },
          { key: 'guru_name', label: 'Nama Guru', sortable: true, sortDirection: 'desc' },
          { key: 'guru_tingkat_sekolah', label: 'Tingkat Sekolah', sortable: true, sortDirection: 'desc' },
          { key: 'guru_email', label: 'Email', sortable: true, sortDirection: 'desc' },
          { key: 'guru_hp', label: 'No Handphone', sortable: true, sortDirection: 'desc' },
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
        }
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
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
}
</script>
