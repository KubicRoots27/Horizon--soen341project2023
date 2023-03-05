import Card from "../../../components/Card";

const AdminDashboard = () => (
  <Card width="w-3/4 lg:w-3/4">
    <div className="text-2xl font-bold text-russian_green">
      You are an admin!
    </div>
    <div className="text-2xl font-bold text-russian_green">
      <Link href="/admin">
        <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5">
          Go to admin dashboard
        </button>
      </Link>
    </div>
  </Card>
);

export default AdminDashboard;
