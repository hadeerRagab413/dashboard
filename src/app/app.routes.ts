import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrackPatientsComponent } from './pages/track-patients/track-patients.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PlansComponent } from './pages/plans/plans.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
 { path: 'plans', component: PlansComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'track-patients', component: TrackPatientsComponent },
];
