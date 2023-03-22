import admin from "firebase-admin";
import serviceAccount from "../shukran-erp-v2-firebase-adminsdk-1zzek-a4ac2f8b4a.json" assert { type: "json" };
const sa = {
    type: "service_account",
    project_id: serviceAccount.project_id,
    private_key_id: serviceAccount.private_key_id,
    private_key: serviceAccount.private_key,
    client_email: serviceAccount.client_email,
    client_id: serviceAccount.client_id,
    auth_uri: serviceAccount.auth_uri,
    token_uri: serviceAccount.token_uri,
    auth_provider_x509_cert_url: serviceAccount.auth_provider_x509_cert_url,
    client_x509_cert_url: serviceAccount.client_x509_cert_url,
};
admin.initializeApp({
    credential: admin.credential.cert(sa),
    databaseURL: "https://shukran-erp-v2-default-rtdb.asia-southeast1.firebasedatabase.app",
});
const firestore = admin.firestore();
const users = firestore.collection("ecommerce_users");
export default admin;
export { firestore, users };
//# sourceMappingURL=firebase.js.map