import JsonToForm from 'json-reactform';
import styles from './styles.module.scss';

const InputPage = () => {
  const formSchema = {
    "Nama Komoditas": {
      "type": "text",
      "required": true
    },
    "Kota": {
      "type": "text",
      "required": true
    },
    "Provinsi": {
      "type": "text",
      "required": true
    },
    "Besar": {
      "type": "number",
      "required": true
    },
    "Harga per kg (dalam rupiah)": {
      "type": "currency",
      "required": true
    },
    "Save": { // button submit
      "type": "submit",
    }
  };
  return (
    <main className={styles['inputpage-main']}>
      <header>
        <h2>Tambah Produk Baru</h2>
      </header>
      <JsonToForm model={formSchema} onSubmit={(params) => console.log('AHAi', params)} />
    </main>
  );
};

export default InputPage;
