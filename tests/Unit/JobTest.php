<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Employer;
use \App\Models\Job;

class JobTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_example(): void
    {
        $this->assertTrue(true);
    }
}

// in tutorial different testing setup is used

// it('it belongs to an employer', function () {
//     //Arrange
//     $employer = Employer::factory()->create();
//     $job = Job::factory()->create([
//         'employer_id' => $employer->id,
//     ]);

//     //Action and Assert
//     expect($job->employer->is($employer)) - toBeTrue();
// });


// it('can have tags', function () {
//     $job = Job::factory()->create();

//     $job->tag('Frontend');

//     expect($job->tags)->toHaveCount(1);
// });
