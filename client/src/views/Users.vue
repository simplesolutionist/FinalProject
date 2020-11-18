
  <template>
  
  <div class="page">
      <h2 class="title is-2">Manage Users</h2>
      <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Admin Functionalities
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
 
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Add User</a>
    <a href="#" class="card-footer-item">Edit User</a>
    <a href="#" class="card-footer-item">Delete User</a>
  </footer>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Add Exercise</a>
    <a href="#" class="card-footer-item">Edit Exercise</a>
    <a href="#" class="card-footer-item">Delete Exercise</a>
  </footer>
</div>
<br>

        <table class="table is-narrow is-hoverable is-fullwidth">
            <thead><tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Password</th>
                <th>DOB</th>
                <th>Type</th>
            </tr></thead>
            <tbody>
                <tr v-for=" (x, i) in list " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                    <td>{{x.FirstName}}</td>
                    <td>{{x.LastName}}</td>
                    <td>{{x.Password}}</td>
                    <td>{{x.DOB}}</td>
                    <td>{{x.Type}}</td>
                </tr>
            </tbody>
        </table>

  </div>
</template>

<script>
import { getList } from "@/models/users";
import session from "@/models/session";
export default {
    data(){
        return {
            list: []
        }
    },
    async created(){
        this.list = await getList();
    },
    components: {
    },
    methods: {
        
    }
}
</script>

<style>
</style>


