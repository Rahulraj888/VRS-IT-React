import React from 'react';

function UploadModal({ onClose, onSubmit }) {
  return (
    <div className="modal show fade" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Upload Documents</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label htmlFor="document" className="form-label">
                  Choose File
                </label>
                <input type="file" className="form-control" id="document" name="document" required />
              </div>
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>
  );
}

export default UploadModal;
