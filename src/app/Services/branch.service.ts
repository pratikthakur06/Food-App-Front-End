import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http:HttpClient) { }

  findAllBranch() {
    return this.http.get(`http://localhost:8080/branch`);
  }

  registerBranch(branch:any,id:any) {
    return this.http.post(`http://localhost:8080/branch/${id}`,branch);
  }

  updateBranch(id:any, branch:any) {
    return this.http.put(`http://localhost:8080/branch?id=${id}`,branch);
  }
}
