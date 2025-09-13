interface Ipropse {
  msg: string;
}

export const Errore = ({ msg }: Ipropse) => {
  return msg ? <span className="block text-red-700 text-sm font-semibold capitalize">{msg}</span> : null;
};
