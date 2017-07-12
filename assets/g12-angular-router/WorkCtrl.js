app.controller('WorkCtrl', function ($scope, $routeParams) {

	$scope.works = [
		{
			name: 'Sky-Club',
			img: '3.jpg',
			link: 'https://in4eg.github.io/work/sky_club/',
			text: [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit soluta unde ducimus laboriosam obcaecati culpa pariatur porro, atque ipsum quae exercitationem ea perferendis excepturi, quo eum officiis quis provident voluptate!',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quis consequuntur, possimus rerum odit consectetur nihil odio eaque eum. Pariatur omnis quisquam placeat libero! Accusamus alias culpa ad quasi quisquam.',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate sapiente praesentium animi? Voluptatem ducimus debitis nulla, exercitationem, dolor hic ea ratione necessitatibus quos est eveniet at consequatur, delectus totam!',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ut architecto amet cupiditate vitae blanditiis fugit similique, tenetur, accusamus culpa reprehenderit sint veniam aspernatur nobis rem aliquid est placeat vel.'
			]
		},
		{
			name: 'USA Realty',
			img: '1.jpg',
			link: 'https://in4eg.github.io/work/usa/',
			text: [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aliquid voluptate minima, non nemo at, in id voluptatibus facilis saepe veniam temporibus, quasi laudantium ducimus accusantium. Perferendis est, voluptatibus soluta.',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto dolore fugiat repellendus asperiores consequuntur sapiente eius earum quibusdam deserunt repellat beatae quam ab dolores, nemo, dolorem accusamus! Debitis, facilis?',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt tenetur, illo autem unde rerum quae, nobis laboriosam enim odio, doloribus quasi, quibusdam fugit perferendis et minus placeat. Aliquam, repudiandae aperiam?',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio doloribus expedita explicabo, velit asperiores perspiciatis maiores in, suscipit ratione deserunt officiis sunt quos et magnam beatae odio omnis autem.'
			]
		},
		{
			name: 'Sartogosm',
			img: '2.jpg',
			link: 'http://giri.ru/',
			text: [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere id hic reprehenderit dolorum laudantium accusamus autem, nemo asperiores minima corporis aliquid quia, necessitatibus praesentium ea ad incidunt laborum, repellat deserunt?',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quo praesentium itaque facilis at, enim doloremque quis odit accusantium, quos deserunt. Maiores, atque necessitatibus, molestiae quaerat corporis laboriosam optio eveniet?',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis magnam deleniti, libero ad ipsa dolorem repudiandae id beatae eligendi doloremque eum assumenda illum ab aliquid ea tempore at quos, odio.',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi blanditiis fugit magni atque eius, ipsa nulla! Porro veniam reiciendis, reprehenderit iusto. Velit veniam maiores, vel rem, repellat odio id architecto.'
			]
		},
		{
			name: 'Miele',
			img: '4.jpg',
			link: 'https://in4eg.github.io/work/miele/',
			text: [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ad in sed nemo vel delectus temporibus, adipisci blanditiis laboriosam ut dolor placeat enim harum quasi necessitatibus similique repudiandae, et tempore.',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente cumque nemo quidem numquam, fugiat ad aspernatur perferendis enim, sit asperiores. Cumque quaerat doloremque, nihil unde eos sapiente! Pariatur, ex, libero?',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis tempora itaque placeat quibusdam perspiciatis, aperiam libero necessitatibus, velit dolores, facilis amet sit. Dolorem ducimus enim facere error nisi neque explicabo?'
			]
		},
		{
			name: 'M-Style',
			img: '5.jpg',
			link: 'https://in4eg.github.io/work/m-style/',
			text: [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem commodi, beatae, incidunt maiores nisi ut explicabo reprehenderit magnam accusamus ducimus dolor quisquam, obcaecati, eos velit amet consequuntur fugiat in veritatis?',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim amet beatae atque! Quisquam cum quia officia dignissimos hic, ad quam atque sit dolorem dolorum dolores nihil. Distinctio ad quam nemo.',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quos in illo dicta qui voluptatem rem vero harum eius laudantium nesciunt adipisci nulla fugit, nihil modi sint, tenetur ipsum ut!',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eligendi quam accusantium blanditiis id dolore, quasi alias error cupiditate molestias praesentium vel consequatur atque, repellendus distinctio magnam illum dicta iusto.'
			]
		},
		{
			name: 'Good Wheels',
			img: '6.jpg',
			link: 'https://in4eg.github.io/work/goodwheels/',
			text: [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique accusamus error labore est deserunt expedita voluptatem, odit veniam. Ex unde deserunt, reprehenderit! Ipsum non eius, temporibus voluptate maxime cupiditate odit.',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quod eveniet cum recusandae temporibus voluptatem consectetur minima non ipsa nisi placeat expedita totam, voluptatum possimus laboriosam ea. Placeat, ducimus, alias!',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptates doloremque quisquam iusto quibusdam, illum animi, cumque eos fugiat fuga vero deserunt, quasi blanditiis! Voluptatibus dolor minus eius facilis, ipsa?'
			]
		}
	];

	$scope.work = $scope.works[$routeParams.id];

});
