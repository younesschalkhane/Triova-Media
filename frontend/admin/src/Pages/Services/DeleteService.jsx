import React from "react";
import { Trash2 } from "lucide-react";

function DeleteService({ service, onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold mb-4">
          Supprimer le service
        </h2>

        <p className="text-gray-600 mb-6">
          Êtes-vous sûr de vouloir supprimer ce service ?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg"
          >
            Annuler
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
          >
            <Trash2 size={18} />
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteService;