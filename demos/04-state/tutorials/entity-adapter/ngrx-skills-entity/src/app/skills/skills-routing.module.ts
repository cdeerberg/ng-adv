import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsContainerComponent } from './skills-container/skills-container.component';

const routes: Routes = [{ path: '', component: SkillsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
