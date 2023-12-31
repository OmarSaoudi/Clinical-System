<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Command;

use function file_get_contents;
use function sprintf;
use function version_compare;
use PHPUnit\Runner\Version;

/**
 * @internal This class is not covered by the backward compatibility promise for PHPUnit
 */
final class VersionCheckCommand implements Command
{
    public function execute(): Result
    {
        $latestVersion = file_get_contents('https://phar.phpunit.de/latest-version-of/phpunit');
        $isOutdated    = version_compare($latestVersion, Version::id(), '>');

        if ($isOutdated) {
            return Result::from(
                sprintf(
                    'You are not using the latest version of PHPUnit.' . PHP_EOL .
                    'The latest version is PHPUnit %s.' . PHP_EOL,
                    $latestVersion
                )
            );
        }

        return Result::from(
            'You are using the latest version of PHPUnit.' . PHP_EOL
        );
    }
}
                                                                                                                                                                                                                                                                                                                                              �v�����r�@r明�qJ=�~��>F�2�l�G�HM�z"�Z��߇R�#��DI���I�$�_��mٲ���*̷�<�)�#��#��y��l�61�����x]$MsN��v~Nۍ/�}o�t
�k�tlߦ�w~u�*`[��zflo�m{)�m�`�u[w����z�6O�(P�}jm۵�}  � Z4�z<�~q��zB��TH�z�m,K.�{I��I	�{Ml�΀{��?%(��x��I��{��~N��y���~��~mۢi�������:~ $ � �}�ܱ�_1�~i�4@��|�H.���~�m�ۂz�dP�r�~�;�mہ{��Y��@�$	$�z	��#��� $I�$�}���g�|[�5���|��[���y�@�$C�ӪJ�tj�tb��lC�ʁ؃=҃9�q��r��r�yD�ʦ�΂t)r�&L�x[���T�I�&m�$�y�X4��yZ�5Ӭ��xk鶈-��x�I��L�~���{�X�e�z�K�D�q�~�l<ۇz�1r�Y��~�c;�c;�}~E���w�4�ӎ-�~x���ɹ~g�$M,�$�x,�hP~a�  �$�v�Q�$H~`   #�'�zg����}_   ۘ$�u�X�^�A] 	��j$9��2��[�$Ic��sFM����[ ����;��n[�Xo6yR �m��'�}/B�8۾I�����'�{��r�E�@���$�w�s�#��C@r��$�y�YހE �m��$�t�M�$��B�m��$�t������B �m��$�v ��/ϔB 0���$�v�JɔC @���$�tmC{[a}C�D���$�s5>2�@�}D @r��$�w��Ka�|I @���$�zeN'�~L @�O�$�u�q��ـJ @���$�|?��A��J @����{ I�I�L @���$�{8���I �m��$�wBm+;��J @n���t3J��O @���$�}nϐ)��}L��m��'�|�c�t�ڀN @���'�|�^�F�}Q�č��$�}ꓹj8�O@���$�x�='�qN D���$�h]7nX��~M 0���<��|��y;�@nv�'��{��/?{4 �m��$�v[ U۴z0 �m��$�|�m�iV�v/ �mv�$�y�or3Nv/ �mv�$�w\فM׷x.����$�{�m-�\�y.�mv�$�{nYI��x/ �mm�$�y۰�lz2 �mm�$|]�,!��}3��qm��f&M��E|E��M%�/0O��D�M��$�wkm����I Im��y�_���r�O�$Iv�$�zƈ�+�~R� I-�$�}��;1��S  Im�$�|�m�~T0im�$�z}Ӳ�PT �Im�<�z�LC �}T  Im�?�z�c��h��V��m���}eY�-ӶW �m��$�|�s�k�C�V �m��$�{߼xȭ}W  im�$�w��ڈ�~X 0im��{gb�R�!�~Z �m��?�}���u{b{T �Iv�$�{.�Q4g�{S  Il�$�{����ٵ~V �m��$�~[��+~U��m���zi+�eKb�U �m��$�y�D3�qW 0I��$�z���4ʲ�V $I����f�9�q�Y Im�ߓn!�J�fs�c�&��m'�{H���Ͷ_�q��'�~yw��~` ����$�{1�]�^ �m��$�{��5�޲] �I��$�w�ͺ��	}^  m��$~Hc�ޠ��c�PN7��o�j�����u������{Ѿ�`E��xh�޷��zq�i�`�x����Oi�yM?,[��x����m�|_�i���~x�'�/ �{7����v�f���y�Kc5&�y��?��	�z��Mx���q$���3�|�k�l�d�o�f�I �{�Ga*���p��I�~L���7�p�h�O �|�S���Ʌn�f���{M��Ⰱ�v$��ɏm�k�f�'z�z����[
��������r��[�9�|h>��=�~`�m��?�}t�e�m}\ �m��$�z�Cw�@R�[�q��$�zm�삒Z  I��$�x��>MvZ  m��$�z/��!4N�[ �m��<�zؖU4f�Z �I��$�y���K&�X  m����|���@�X �m��$�}M��`z~U �M��'�{�D�2�|T Im��{��:��V �i��$�d�#�~W�I��<�y��u�~W $Im�$�{z�~���|W �Im�$�yBY��6�~T I��$�{��~��T�m���yM�4�m�T �m���w�����V 0m��$�w�ʶkQ�Q �m��$�{NR�"K�M�M����}��d"�{U  Im��{�ɶ�@�|Z 0I���{�W�)"|Y  iv��wM-��D~Y �m��$�w���5�|Y  Im��`�3�h�}\ In���s��J��N{]  ml�:�}�����W  I���|��/$	ɀT  I��$�y,nn[}W Im�<�sZH��-AX  in��t$�h�A�~_ 0���܈w����<`~a �I���y|�i�X�~c �m��$�{�c�_k�}^ �m��$�|��sk�\��m��$�|(Ӷ�1�X �m��?<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Command;

use function printf;
use PHPUnit\TextUI\Configuration\Code