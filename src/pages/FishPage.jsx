import React from "react";
import List from "../components/List";
import PageRow from "../layout/PageRow";
import FishForm from "../components/form/FishForm";

function FishPage({ list, setList }) {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <main>
          <PageRow>
            <List list={list} setList={setList} />
          </PageRow>
          <PageRow>
            <FishForm list={list} setList={setList} />
          </PageRow>
        </main>
      </div>
    </div>
  );
}

export default FishPage;
