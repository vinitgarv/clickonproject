import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CliconComponent } from '../../SocialIcons/clicon.component';
import { SeachComponent } from '../../SocialIcons/search.component';
import { CartIconComponent } from '../../SocialIcons/cart.component';
import { WishlistComponent } from '../../SocialIcons/wishlist.component';
import { UserComponent } from '../../SocialIcons/user.component';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from '../../SocialIcons/hamburger.component';
import { AuthService } from '../../Services/userservice.service';
import { CartService } from '../../Services/cart.service';



@Component({
  selector: 'app-middlenavbar',
  imports: [RouterModule, CommonModule, CliconComponent, SeachComponent, HamburgerComponent, CartIconComponent, WishlistComponent, UserComponent],
  templateUrl: './middlenavbar.component.html',
  styleUrl: './middlenavbar.component.css'
})
export class MiddlenavbarComponent implements OnInit {

  product: number = 0;


  route: Router = inject(Router)
  onCartClicked() {
    this.route.navigate(['/cart'])
  }

  onUserClicked() {
    this.route.navigate(['/login'])
  }


  onWishListClick() {
    this.route.navigate(['dashboard'])

  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logoClick() {
    this.route.navigate(['/'])
  }


  authService: AuthService = inject(AuthService)

  user = this.authService.currentUser;
  cartService = inject(CartService)


  ngOnInit(): void {
    this.cartService.totalItems$.subscribe(count => {
      this.product = count;
    });

  }


}
