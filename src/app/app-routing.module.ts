import { ReportsComponent } from './pages/reports/reports.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AllContractsComponent } from './pages/all-contracts/all-contracts.component';
import { ProposalComponent } from './pages/proposal/proposal.component';
import { SavedJobsComponent } from './pages/saved-jobs/saved-jobs.component';
import { DiscoverJobsComponent } from './pages/discover-jobs/discover-jobs.component';
import { MyJobFeedComponent } from './pages/my-job-feed/my-job-feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "job-feed",
    component: MyJobFeedComponent,
  },
  {
    path: "discover-jobs",
    component: DiscoverJobsComponent,
  },
  {
    path: "saved-jobs",
    component: SavedJobsComponent,
  },
  {
    path: "proposal",
    component: ProposalComponent,
  },
  {
    path: "contracts",
    component: AllContractsComponent,
  },
  {
    path: "profile/:id",
    component: ProfileComponent,
  },
  {
    path: "transaction",
    component: TransactionComponent,
  },
  {
    path: "reports",
    component: ReportsComponent,
  },
  { path: '',   redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
