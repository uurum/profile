import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyJobFeedComponent } from './pages/my-job-feed/my-job-feed.component';
import { DiscoverJobsComponent } from './pages/discover-jobs/discover-jobs.component';
import { SavedJobsComponent } from './pages/saved-jobs/saved-jobs.component';
import { ProposalComponent } from './pages/proposal/proposal.component';
import { AllContractsComponent } from './pages/all-contracts/all-contracts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProfileCountsComponent } from './components/profile/profile-counts/profile-counts.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MyJobFeedComponent,
    DiscoverJobsComponent,
    SavedJobsComponent,
    ProposalComponent,
    AllContractsComponent,
    ProfileComponent,
    TransactionComponent,
    ReportsComponent,
    PageNotFoundComponent,
    ReadMoreComponent,
    LoadingComponent,
    ProfileCountsComponent,
    UpgradeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
